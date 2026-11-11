const gulp = require('gulp');
const { sync } = require('glob');
const { readFileSync } = require('fs');
const { join, isAbsolute, dirname, basename } = require('path');
const { getToc, config } = require('./config');
const log = require('single-line-log').stdout;
const chalk = require('chalk');
const highlight = chalk.hex('#4ab576');
const runSequence=require('gulp4-run-sequence');
const fetch = require('node-fetch');
let onlineBrokenUrl = [];
let absolutePaths = [];
let missingFiles = [];
let improperPaths = [];
let improperHeaderPaths = [];
let missingHeaderPaths = [];
let internalHeaderLinkDetails = {};

const expression = {
    urlRegex: /\[(.*?)\]\((.*?)\)|!\[(.*?)\]\((.*?)\)/g,
    headerRegex: /(#+ [^\n]+|\<span class\=\'doc-prop-name\'\>[^\<]+)/g,
    typeRegex: /`(`|)[^`]+(`|)`/,
    mdLinkRegex: /\[[^\)]+\)/,
    separateRegex: /\|/g,
    specialRegex: /[^A-Za-z0-9\- ]/g,
    apiLinkRegex: /\[[^\]]+\]\([^\)]+\)/g,
    apiTypeRegex: /`[^\`]+`/g,
    apiAndRegex: /&#124;/g,
    apiSpanRegex: /<span class='doc-prop-name'>/
};


gulp.task('internal-url-validation', async(done) =>{
    runSequence('toc', async()=> {
       await urlValidation(false, true);
        done();
    });
});

gulp.task('online-url-validation', async(done) =>{
    runSequence('toc', async()=> {
       await urlValidation(true, false);
        done();
    });
});

gulp.task('url-validation', async(done) =>{
    runSequence('toc', async()=> {
       await urlValidation();
        done();
    });
});


async function urlValidation(isOnlineUrlValidation = true, isInternalUrlValidation = true) {
    let docFiles = sync('docs/**/*.md');
    let routerData = getToc().routerData;
    for (let i = 0; i < docFiles.length; i++) {
        let filePath = docFiles[i];
        let docContent = readFileSync(filePath, { encoding: 'utf8' });
        if (docContent.includes('[')) {
            while ((url = expression.urlRegex.exec(docContent)) !== null) {
                if (url.index === expression.urlRegex.lastIndex) expression.urlRegex.lastIndex++;
                let urlPath = url[2];
                if (urlPath && !urlPath.includes('{{site.')) {
                    let isOnlineUrl = urlPath.indexOf('http') === 0;
                    if (isOnlineUrl) {
                        if (isOnlineUrlValidation) await onlineUrlValidation(filePath, urlPath);
                    } else {
                        if (isInternalUrlValidation) internalUrlValidation(filePath, urlPath, routerData);
                    }
                }
            }
        }
    }
    validateHeaderLinks();
    printError();
}

function internalUrlValidation(filePath, urlPath, routerData) {
    if (isAbsolute(urlPath)) {
        absolutePaths.push(`${highlight(urlPath)} URL is referenced in the ${highlight(filePath)} file.`)
    } else {
        if (urlPath.includes('#')) {
            if (urlPath.lastIndexOf('/') !== urlPath.length - 1) {
                const splittedUrl = urlPath.split('#');
                const { isExist, referredFilePath, referredFile, isDemo } = getFileDetail(filePath, splittedUrl[0], routerData);
                if (!isExist) {
                    missingFiles.push(`${highlight(urlPath)} (${highlight(referredFilePath)}) URL is referenced in the ${highlight(filePath)} file.`);
                } else {
                    if (!isDemo && referredFile) {
                        if (!internalHeaderLinkDetails[referredFile]) internalHeaderLinkDetails[referredFile] = [];
                        internalHeaderLinkDetails[referredFile].push({ filePath, urlPath, referredFilePath, header: splittedUrl[1].trim() });
                    }
                }
            }
            else {
                improperHeaderPaths.push(`${highlight(urlPath)} URL is referenced in the ${highlight(filePath)} file.`);
            }
        } else {
            const { isExist, referredFilePath } = getFileDetail(filePath, urlPath, routerData);
            if (urlPath.lastIndexOf('/') === urlPath.length - 1) {
                if (!isExist) missingFiles.push(`${highlight(urlPath)} (${highlight(referredFilePath)}) URL is referenced in the ${highlight(filePath)} file.`);
            } else {
                improperPaths.push(`${highlight(urlPath)} URL is referenced in the ${highlight(filePath)} file.`);
            }
        }
    }
}

async function onlineUrlValidation(filePath, urlPath) {
    try {
        log(`Validating the URL... ${highlight(urlPath)} \n\n`);
        await fetch(urlPath);
    } catch (e) {
        onlineBrokenUrl.push(`${highlight(urlPath)} URL is referenced in the ${highlight(filePath)} file.`);
    }
}

function validateHeaderLinks() {
    const { existsSync } = require('fs');
    Object.keys(internalHeaderLinkDetails).forEach((referredFile) => {
        const entries = internalHeaderLinkDetails[referredFile];
        if (!referredFile) {
            entries.forEach((fileDetail) => {
                missingFiles.push(`${highlight(fileDetail.urlPath)} (${highlight(fileDetail.referredFilePath)}) URL is referenced in the ${highlight(fileDetail.filePath)} file.`);
            });
            return;
        }
        let fileToCheck = referredFile;
        if (!existsSync(referredFile) && referredFile.endsWith('.md')) {
            const indexPath = referredFile.replace(/\.md$/, '/index.md');
            if (existsSync(indexPath)) {
                fileToCheck = indexPath;
            } else {
                const directPath = referredFile.replace(/\.md$/, '.md');
                if (existsSync(directPath)) {
                    fileToCheck = directPath;
                }
            }
        }
        if (!existsSync(fileToCheck)) {
            entries.forEach((fileDetail) => {
                missingFiles.push(`${highlight(fileDetail.urlPath)} (${highlight(fileDetail.referredFilePath)}) URL is referenced in the ${highlight(fileDetail.filePath)} file.`);
            });
            return;
        }
        let docContent = readFileSync(fileToCheck, { encoding: 'utf8' });
        let headers = {}
        docContent.match(expression.headerRegex).forEach(header => headers[getHeaderName(header)] = true);
        entries.forEach((fileDetail) => {
            if (!headers[fileDetail.header]) {
                missingHeaderPaths.push(`${highlight(fileDetail.urlPath)} (${highlight(fileDetail.referredFilePath)}) URL is referenced in the ${highlight(fileDetail.filePath)} file.`)
            }
        });
    });
}

function getHeaderName(header) {
    return header.trim().trim().replace(/<[^>]*>/g, '').replace(expression.apiSpanRegex, '').replace(/[#]+ /, '').replace(expression.apiLinkRegex, '').replace(expression.apiTypeRegex, '')
        .replace(expression.apiAndRegex, '').replace(expression.specialRegex, '').replace(expression.mdLinkRegex, '')
        .replace(expression.typeRegex, '').replace(expression.separateRegex, '').trim().toLowerCase().replace(/[ ]+/g, '-');
}

function getFileDetail(filePath, urlPath, routerData) {
    let baseName = basename(urlPath);
    let dirName = dirname(urlPath);
    let homePage = config.additionalInfo.homePage.fileName + '.md';
    let indexPage = 'index.md';
    let referredFilePath = join((filePath === 'docs/' + homePage ? filePath.replace(homePage, '') : filePath).replace(indexPage, '').replace('.md', ''), dirName + '/' + baseName + '/').replace('docs', '').replace(/\\/g, '/');
    let data = routerData[referredFilePath];
    let referredFile = data ? ('docs' + (data.isIndexPage ? referredFilePath + indexPage : (referredFilePath === '/' ?
        '/' + homePage : referredFilePath.substring(0, referredFilePath.length - 1) + '.md'))) : undefined;
    return {
        referredFilePath,
        referredFile,
        isDemo: data && data.isDemo,
        isExist: data !== undefined
    };
}

function printError() {
    let isValid = true;
    if (onlineBrokenUrl.length) {
        isValid = false;
        console.error(`The following online links (${highlight(onlineBrokenUrl.length)}) are broken.\n\n${onlineBrokenUrl.join('\n')}\n`);
    }
    if (absolutePaths.length) {
        isValid = false;
        console.error(`The following absolute paths (${highlight(absolutePaths.length)}) are referred in this documentation. Please change it to relative.\n\n${absolutePaths.join('\n')}\n`);
    }
    if (improperPaths.length) {
        isValid = false;
        console.error(`The following (${highlight(improperPaths.length)}) URL paths doesn't ends with forward slash (should end with forward slash (/)).\n\n${improperPaths.join('\n')}\n`);
    }
    if (missingFiles.length) {
        isValid = false;
        console.error(`The following (${highlight(missingFiles.length)}) URL paths doesn't exist.\n\n${missingFiles.join('\n')}\n`);
    }
    if (improperHeaderPaths.length) {
        isValid = false;
        console.error(`The Header links of the following (${highlight(improperHeaderPaths.length)}) URL paths ends with forward slash (should not end with forward slash (/)).\n\n${improperHeaderPaths.join('\n')}\n`);
    }
    if (missingHeaderPaths.length) {
        isValid = false;
        console.error(`The Header links of the following (${highlight(missingHeaderPaths.length)}) URL paths doesn't exist.\n\n${missingHeaderPaths.join('\n')}\n`);
    }
    if (!isValid) process.exit(1);
}