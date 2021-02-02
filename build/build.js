/*!
*  filename: build.js
*  version : 2.3.26
*  Copyright © 2001 - 2021 Syncfusion Inc. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
const gulp = require('gulp');
const { rm, mkdir, cp, mv } = require('shelljs');
const { generateToc } = require('./toc.js');
const { sync } = require('glob');
const { repoName, repos, rootPath } = require('./config');
const runSequence = require('run-sequence');

gulp.task('clean', () => {
    const staticFiles = sync('./static/*', {
        ignore: ['./static/favicon.ico', './static/robots.txt', './static/assets', './static/404', './static/404.html', './static/*.zip']
    });
    if (staticFiles.length) rm('-rf', staticFiles);
    rm('-rf', ['./.cache', './public', './src/pages']);
    const leftToc = sync('./left-toc.json');
    if (leftToc.length) rm('-rf', leftToc);
});

gulp.task('copy', () => {
    mkdir('-p', './src/pages');
    cp('-r', './docs/*', './src/pages');
    const API = sync('./API');
    if (API.length) cp('-r', './API/*', './static');
    
});

gulp.task('toc', () => {
    generateToc();
});



gulp.task('postinstall', (callback) => {
    runSequence('replace-gatsby-cli', callback);
});

gulp.task('replace-gatsby-cli', () => {
    rm('-rf', './node_modules/gatsby/node_modules/gatsby-cli');
    const gatsbyCli = './node_modules/gatsby-cli';
    if (sync(gatsbyCli).length) mv(gatsbyCli, './node_modules/');
    cp('-r', `./node_modules/gatsby-remark-image-attributes/package.json`, './node_modules/gatsby-remark-image-attributes/dist');
});





gulp.task('build', (callback) => {
    runSequence('clean', 'copy', 'toc', callback);
});


