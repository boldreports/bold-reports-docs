const gulp = require('gulp');
const { sync } = require('glob');
const { writeFileSync, readFileSync, existsSync, mkdirSync } = require('fs');
const { cd, exec } = require('shelljs');
const { join } = require('path');
const md = require('markdownlint');
const { getToc, apiBaseFolder, config } = require('./config');
const runSequence = require('gulp4-run-sequence');

const branchName = process.env.gitHubTargetBranch; //Needs to update env variable name in machine.

gulp.task('md-lint', (done) => {
    const options = {
        files: sync('*.md').concat(sync('./docs/**/*.md', { ignore: `./docs/**/${apiBaseFolder}/**/*.md` })),
        config: require('./lint/.markdownlint.json')
    };
    md(options, (result, err) => {
        if (err && err.toString().length) {
            console.error(err.toString());
            process.exit(1);
        } else {
            console.log('\n*** Markdown Lint Succeeded ***\n');
            done();
        }
    });
});

gulp.task('typo', (done) => {
    // copy/paste .spelling file in .bin location
    writeFileSync('./node_modules/.bin/.spelling', getSpelling());
    // goto .bin location
    cd('./node_modules/.bin/');
    // run mdspell command
    const mdspellcmd = `mdspell ../../docs/**/*.md ../../*.md !../../docs/**/${apiBaseFolder}/**/*.md -r -n -a -x --color --en-us`;
    const output = exec(mdspellcmd);
    // return root location
    cd('../../');
    if (output.code !== 0) {
        process.exit(1);
    }
    done();
});

// Gulp task to find the image width in document for syntax modification
gulp.task('modify-image-width-syntax', (done) => {
    // Update the path to your Markdown files
    const mdFiles = sync('./docs/**/*.md');
    var matchedWidthContent = '';
    const widthRegexPattern = /.*(?<!')#width=(\d+px)(?!').*/g;
    // Process each Markdown file one by one
    mdFiles.forEach((file) => {
        const mdContent = readFileSync(file, 'utf8');
        matchedWidthContent += widthRegexPattern.test(mdContent) ? file + mdContent.match(widthRegexPattern) + '\n' : '';
    });
    if (!existsSync('./cireports')) {
        mkdirSync('./cireports', { recursive: true });
    }
    console.log(`${matchedWidthContent ? '\n*** The files does not have proper width syntax. Kindly check the width-md-files-list.txt file in the CI status. ***\n'  : '\n*** All the files having proper width syntax ***\n'}`);
    writeFileSync('./cireports/width-md-files-list.txt', matchedWidthContent);
    matchedWidthContent ? process.exit(1) : done();
});

gulp.task('validate-image-alt-text', function(done) {
    const mdFiles = sync('./docs/**/*.md');
    var withoutAltTextImagesContent = '';
    const imageRegexPattern = /!\((.*?)\.png\)/g;
    mdFiles.forEach((file) => {
        const fileContent = readFileSync(file, 'utf8');
        withoutAltTextImagesContent += imageRegexPattern.test(fileContent) ? file + "\t" + fileContent.match(imageRegexPattern) + '\n' : '';
    });
    if (!existsSync('./cireports')) {
        mkdirSync('./cireports', { recursive: true });
    }
    console.log(`${withoutAltTextImagesContent ? '\n*** The files does not have Alt Text for the images. Kindly check the without-alt-text-images-list.txt file in the CI status. ***\n'  : '\n*** All the files having proper alt text images ***\n'}`);
    writeFileSync('./cireports/without-alt-text-images-list.txt', withoutAltTextImagesContent);
    // withoutAltTextImagesContent ? process.exit(1) : done(); - for CI fail we need to enable this.
    done();
})
function getSpelling() {
    return readFileSync('./.spelling', 'utf8');
}

function normalizePath(filePath) {
    return filePath.replace(/\\/g, '/');
}

function getDocCandidates(pagePath) {
    const normalizedPagePath = pagePath === '/' ? '/' : pagePath.replace(/^\/+|\/+$/g, '');

    if (normalizedPagePath === '/') {
        return [`docs/${config.additionalInfo.homePage.fileName}.md`];
    }

    return [
        `docs/${normalizedPagePath}.md`,
        `docs/${normalizedPagePath}/index.md`
    ];
}

function getPagePathFromDoc(filePath) {
    const normalizedFilePath = normalizePath(filePath);
    const homePagePath = `docs/${config.additionalInfo.homePage.fileName}.md`;

    if (normalizedFilePath === homePagePath) {
        return '/';
    }

    if (normalizedFilePath.endsWith('/index.md')) {
        return `/${normalizedFilePath.replace(/^docs\//, '').replace(/\/index\.md$/, '')}/`;
    }

    if (normalizedFilePath.endsWith('.md')) {
        return `/${normalizedFilePath.replace(/^docs\//, '').replace(/\.md$/, '')}/`;
    }

    return null;
}

function collectSummaryFiles(summaryNode, files = new Set()) {
    if (typeof summaryNode === 'string') {
        const normalizedFileName = summaryNode.endsWith('.md') ? summaryNode : `${summaryNode}.md`;
        files.add(normalizedFileName);
        return files;
    }

    if (summaryNode && typeof summaryNode === 'object') {
        Object.values(summaryNode).forEach(value => collectSummaryFiles(value, files));
    }

    return files;
}

gulp.task('md-file-validation', (done) => {
    runSequence('toc', () => {
        const toc = getToc();
        const pageData = Array.isArray(toc.pagesData) ? toc.pagesData.filter(item => item.fileType !== 'html') : [];
        const pagePaths = new Set(pageData.map(item => item.path));
        const missedFiles = [];
        const summaryPaths = sync('docs/**/summary.json');
        const summaryFiles = new Set();
        
        summaryPaths.forEach((summaryPath) => {
            try {
                const summary = JSON.parse(readFileSync(summaryPath, 'utf8'));
                const files = collectSummaryFiles(summary);

                files.forEach(f => summaryFiles.add(f));
            } catch (err) {
                console.error(`❌ Error reading ${summaryPath}`);
                console.error(err.message);
            }
        });
        
        const unusedSummaryFiles = [];

        pageData.forEach((page) => {
            const candidates = getDocCandidates(page.path);
            const matchedFiles = candidates.filter(file => existsSync(file));

            if (!matchedFiles.length) {
                missedFiles.push(`${page.path} -> ${candidates.join(' | ')}`);
                return;
            }
        });

        sync('docs/**/*.md').forEach(file => {
            const normalizedFile = normalizePath(file);
            const fileName = normalizedFile.split('/').pop();

            if (fileName === 'index.md') {
                return;
            }

            if (!summaryFiles.has(fileName)) {
                unusedSummaryFiles.push(normalizedFile);
            }
        });

        const unUsedMdFiles = sync('docs/**/*.md*').filter(file => {
            const pagePath = getPagePathFromDoc(file);
            const isHtmlPage = pagePath && toc.pagesData.some(p => p.path === pagePath && p.fileType === 'html');
            return (!pagePath || !pagePaths.has(pagePath)) && !isHtmlPage;
        });

        if (missedFiles.length) {
            console.error(`The following pageData paths do not have a matching md file (${missedFiles.length})\n
${missedFiles.join('\n')}\n`);
        }

        if (unUsedMdFiles.length) {
            console.error(`The following md files are not referenced in left-toc.json pagesData (${unUsedMdFiles.length})\n
${unUsedMdFiles.join('\n')}`);
        }

        if (unusedSummaryFiles.length) {
            console.error(`The following md files are not referenced in docs/summary.json (${unusedSummaryFiles.length})\n
${unusedSummaryFiles.join('\n')}`);
        }

        if (missedFiles.length || unUsedMdFiles.length || unusedSummaryFiles.length) process.exit(1);
        done();
    });
});

gulp.task('test', (done) => {
    runSequence('md-file-validation',
        'typo',
        'modify-image-width-syntax',
        'validate-image-alt-text',
        'file-validation',
        'seo-validation',
        'internal-url-validation',
        'md-lint',
        'validate-code-highlight',        
        done);
});

gulp.task('ci-test', gulp.series('test'));
