const gulp = require('gulp');
const git = require('simple-git');
const { writeFileSync, readFileSync, existsSync } = require('fs');
const { dirname, basename, join } = require('path');
const { cp, mkdir, rm } = require('shelljs');
const { commonFiles, config, getRepoInfo, repos, repoName, largerSizeCommonFileRepo } = require('./config');
const { removeMisc } = require('./toc');
const log = require('single-line-log').stdout;
const chalk = require('chalk');
const highlight = chalk.hex('#4ab576');
const argv = require('yargs').argv;
const fetch = require('node-fetch');

const GITHUB_USER = "SyncfusionBuild", GiteaBuildAutomation_PrivateToken = process.env.GiteaBuildAutomation_PrivateToken; // Needs to update the env variable name in machine , wherever used.

const branchName = process.env.gitHubTargetBranch || argv.targetBranch || config.branch;

const repoFolder = 'common-repo';

function getGitUrl(repoName) {
    let url = "";
    if (GITHUB_USER && GiteaBuildAutomation_PrivateToken)
        url = `https://${GITHUB_USER}:${GiteaBuildAutomation_PrivateToken}@gitea.syncfusion.com/bold-reports/${repoName}.git`;
    else
        url = `https://gitea.syncfusion.com/bold-reports/${repoName}.git`;
    return url;
}

let gitIgnoredFiles = [];

gulp.task('copy-common-files', async () => {
    gitIgnoredFiles = [];
    let spelling = '';
    let commonRepos = Object.keys(commonFiles);
    rm('-rf', repoFolder);
    for (let i = 0; i < commonRepos.length; i++) {
        console.log(await cloneRepo(commonRepos[i]));
        spelling += readFileSync(`${repoFolder}/.spelling`, 'utf8') + '\n';
        processMdFile(commonFiles[commonRepos[i]], commonRepos[i]);
        rm('-rf', repoFolder);
    }
    writeFileSync(join(__dirname, '.spelling-common'), spelling, { encoding: 'utf8' });
    if (gitIgnoredFiles.length) ignoreGitFiles();
});

function ignoreGitFiles() {
    let gitIgnore = readFileSync('./.gitignore', 'utf-8');
    const regexExp = new RegExp(/# startFiles(.*)# endFiles/, 's');
    const template = `# startFiles\n${gitIgnoredFiles.reduce((acc, curr) => acc.trim() + '\n' + curr.trim())}\n# endFiles`;
    const regexResult = regexExp.exec(gitIgnore);
    writeFileSync('.gitignore', gitIgnore.replace(regexResult[0], template));
}

async function cloneRepo(repoName) {
    return new Promise((resolve, reject) => {
        mkdir('-p', repoFolder);
        const URL = getGitUrl(repoName);
        console.log(`Cloning ${highlight(repoName)} from ${highlight(branchName)} branch`);
        git().clone(URL, repoFolder, ['--depth=1', `--branch=${branchName}`], (errorLog) => {
            if (errorLog)
                reject(errorLog);
            resolve(`Successfully cloned ${highlight(repoName)} from ${highlight(branchName)} branch`);
        });
    });
}

function processMdFile(fileArray, repoName) {
    let count = 1;
    let startTime = new Date().getTime();
    let reposBaseUrl = getRepoInfo(repoName).url;
    fileArray.forEach(file => {
        log(`Processing ${highlight(count + '/' + fileArray.length)} of ${highlight(repoName)} files to destination\n`);
        const mdBasePath = 'docs';
        const fileData = readFileSync(`${repoFolder}/${mdBasePath}/${file.src}`, 'utf-8');
        processMdHeader(fileData, file, reposBaseUrl, mdBasePath);
        processAssets(fileData);
        count++;
    });
    log(`Processed ${highlight((count - 1) + '/' + fileArray.length)} of ${highlight(repoName)} files to destination in ${highlight((new Date().getTime() - startTime) / 1000 + ' s')}\n`);
}

function processMdHeader(fileData, file, reposBaseUrl, mdBasePath) {
    const regexExp = new RegExp(/---(.*?)---/, 's');
    let frontmatterTemplate = '';
    if (file.frontmatter) {
        Object.keys(file.frontmatter).forEach((frontmatter) => {
            frontmatterTemplate += `${frontmatter}: ${file.frontmatter[frontmatter]}\n`;
        });
    }
    let canonicalURL = `/${reposBaseUrl}/${removeMisc(file.src)}/`;
    frontmatterTemplate += `canonical: ${canonicalURL.replace('index/', '').trim()}`;
    const template = `---\n${frontmatterTemplate}\n---`;
    const regexResult = regexExp.exec(fileData);
    let dest = file.dest ? file.dest : dirname(file.src) + '/';
    dest = (dest === '/' || dest === './') ? '' : dest;
    let destPath = `${mdBasePath}/${dest}${basename(file.src)}`;
    gitIgnoredFiles.push(destPath);
    mkdir('-p', `${dirname(destPath)}`);
    writeFileSync(destPath, fileData.replace(regexResult[0], template));
}

function processAssets(fileData) {
    const imgPattern = /!\[(.*?)\]\((.*?)\)/g;
    if (fileData.indexOf('![') > -1) {
        while ((img = imgPattern.exec(fileData)) !== null) {
            if (img.index === imgPattern.lastIndex) imgPattern.lastIndex++;
            if (img[2] != undefined) {
                let imgPath = img[2].split('#')[0].replace(/\s+'/g, '');
                imgPath = imgPath[0] === '/' ? imgPath.substring(1) : imgPath;
                gitIgnoredFiles.push(imgPath);
                mkdir('-p', `${dirname(imgPath)}`);
                cp('-r', `${repoFolder}/${imgPath}`, `${dirname(imgPath)}`);
            }
        }
    }
}

function getIgnoredFiles() {
    const mdBasePath = 'docs';
    let ignoredFiles = { fileList: [], folderList: [], commonFileList: [] };
    Object.keys(commonFiles).forEach((commonRepo) => {
        commonFiles[commonRepo].forEach((file) => {
            let dest = file.dest ? file.dest : dirname(file.src) + '/';
            dest = (dest === '/' || dest === './') ? '' : dest;
            let destPath = `${mdBasePath}/${dest}${basename(file.src)}`;
            dest.split('/').forEach((dir) => {
                if (dir && ignoredFiles.folderList.indexOf(dir) === -1) {
                    ignoredFiles.folderList.push(dir);
                }
            });
            ignoredFiles.fileList.push(`./${destPath}`);
            ignoredFiles.commonFileList.push(`${destPath}`);
        })
    });
    return ignoredFiles;
}

gulp.task('common-file-validation', async () => {
    const token = process.env.GiteaBuildAutomation_PrivateToken || '8bbca5cff78cf640bbaf96465b229587a8de8337'; //Need to Update the token here and need to change the env variable name in machine.
    const repoKeys = Object.keys(repos).filter(repo => repos[repo].name !== repoName);
    const mdBasePath = 'docs';
    let failureList = {};
    let ignoredFileList = getIgnoredFiles().commonFileList;
    for (let i = 0; i < repoKeys.length; i++) {
        let url = `https://gitea.syncfusion.com/api/v1/repos/bold-reports/${repos[repoKeys[i]].name}/contents/common-files.json?ref=${encodeURIComponent(branchName)}&token=${token}`;
        let startTime = new Date().getTime();
        log(`Fetching common files from ${highlight(repos[repoKeys[i]].name)} ${highlight(`(${branchName} branch)`)}\n`);
        let request = await fetch(url, {
            method: 'GET',
            headers:{
                "accept": "application/json",
        }});
        let response = await request.json();
        log(`Fetched common files from ${highlight(repos[repoKeys[i]].name)} ${highlight(`(${branchName} branch)`)} in ${highlight((new Date().getTime() - startTime) / 1000 + ' s')}`);
        let repoCommonFiles = largerSizeCommonFileRepo.includes(repos[repoKeys[i]].name) ? response : JSON.parse(Buffer.from(response.content, 'base64').toString());
        console.log('');
        Object.keys(repoCommonFiles).forEach((commonRepo) => {
            if (commonRepo === repoName) {
                repoCommonFiles[commonRepo].forEach((file) => {
                    let path = `${mdBasePath}/${file.src}`;
                    if (ignoredFileList.includes(path)) {
                        if (!failureList[repos[repoKeys[i]].name]) failureList[repos[repoKeys[i]].name] = [];
                        failureList[repos[repoKeys[i]].name].push(`${path}`);
                    } else if (!existsSync(path)) {
                        if (!failureList[repos[repoKeys[i]].name]) failureList[repos[repoKeys[i]].name] = [];
                        failureList[repos[repoKeys[i]].name].push(`${path}`);
                    }
                });
            }
        });
    }
    let failureListKeys = Object.keys(failureList);
    if (failureListKeys.length) {
        failureListKeys.forEach((failureListKey) => {
            console.log(`\n*******The following ${highlight(failureList[failureListKey].length)} files are referenced in ${highlight(failureListKey)} ${highlight(`(${branchName} branch)`)} but it was not exists in ${highlight(repoName)}*******\n`);
            console.log(failureList[failureListKey].join('\n'));
        });
        process.exit(1);
    }
    
});

module.exports = {
    getIgnoredFiles: getIgnoredFiles
};
