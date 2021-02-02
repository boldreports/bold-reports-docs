/*!
*  filename: test.js
*  version : 2.3.26
*  Copyright © 2001 - 2021 Syncfusion Inc. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
const gulp = require('gulp');
const { sync } = require('glob');
const { writeFileSync, readFileSync, existsSync } = require('fs');
const { cd, exec } = require('shelljs');
const { join } = require('path');
const md = require('markdownlint');
const jshint = require('gulp-jshint');
const htmllint = require('gulp-htmllint');
const { getToc, repoName, repos, rootPath, apiBaseFolder, config } = require('./config');
const runSequence = require('run-sequence');

const branchName = process.env.gitlabTargetBranch;

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

gulp.task('typo', () => {
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
});

function getSpelling() {
    let spellingFile = join(__dirname + './../.spelling');
    let spelling = existsSync(spellingFile) ? '\n' + readFileSync(spellingFile, 'utf8') : '';
    return readFileSync('./.spelling', 'utf8') + spelling;
}

gulp.task('js-lint', () => {
    let config = JSON.parse(readFileSync(rootPath + 'lint/.jshintrc').toString());
    return gulp.src(['demos/javascript/**/*.js'])
        .pipe(jshint({ lookup: false, ...config }))
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('html-lint', () => {
    return gulp.src('demos/**/*.html')
        .pipe(htmllint({ failOnError: true, config: rootPath + 'lint/.htmllintrc' }));
});

gulp.task('md-file-validation', ['toc'], () => {
    let routerData = getToc().routerData;
    let routerKeys = Object.keys(routerData);
    let referredMdFiles = {};
    let missedFiles = [];
    routerKeys.forEach((routerPath) => {
        let data = routerData[routerPath];
        let mdPath = data.isIndexPage ? routerPath + 'index.md' : (routerPath === '/' ? '/' + config.additionalInfo.homePage.fileName + '.md' : routerPath.substring(0, routerPath.length - 1) + '.md');
        if (!existsSync(`docs${mdPath}`) && !data.isDemo && routerPath !== '/') {
            missedFiles.push(`docs${mdPath}`);
        } else {
            referredMdFiles[`docs${mdPath}`] = true;
        }
    });
    let unUsedMdFiles = sync('docs/**/*.md*').filter(file => !referredMdFiles[file]);

    if (missedFiles.length) {
        console.error(`The following md files (${missedFiles.length}) are missing \n
${missedFiles.join('\n')}\n`)
    }

    if (unUsedMdFiles.length) {
        console.error(`The following md files (${unUsedMdFiles.length}) are not used in this documentation\n
${unUsedMdFiles.join('\n')}`)
    }

    if (missedFiles.length || unUsedMdFiles.length) process.exit(1);
});

gulp.task('redirect-validation', (done) => {
    let checkInJenkins = exec(`git diff origin/${branchName} --name-only --diff-filter=D`).stdout.split('\n').filter(Boolean);
    let isoldmdFile = skipValidation(checkInJenkins);
    if (isoldmdFile) {
        console.error('The above files are deleted.!!!')
        process.exit(1);
    }
    done();
});

function skipValidation(diff) {
    let isDeletedFile = false;
    diff.forEach(value => {
        if (value.startsWith('docs') && value.endsWith('.md') || value.startsWith('docs') && value.endsWith('.json')) {
            isDeletedFile = true;
        }
    })
    return isDeletedFile;
}

gulp.task('platform-order-validation', (done) => {
    let checkInJenkins = exec(`git diff origin/${branchName} --name-only --diff-filter=DM`).stdout.split('\n').filter(Boolean);
    let platformOrder = 'platform-order.json';
    if (checkInJenkins.includes(platformOrder)) {
        console.log(`The ${platformOrder} file has modified or deleted.!!!`);
        process.exit(1);
    }
    done();
});

gulp.task('ci-test', (done) => {
    runSequence('platform-order-validation', 'redirect-validation', 'test', done);
});


gulp.task('test', (callback) => {
    runSequence('md-file-validation',
        
        'typo',
        'file-validation',
        
        'internal-url-validation',
        'md-lint',
        
        callback);
});