const gulp = require('gulp');
const { rm, mkdir, cp, mv } = require('shelljs');
const { generateToc } = require('./toc.js');
const { sync } = require('glob');
const runSequence = require('gulp4-run-sequence');

gulp.task('clean', (done) => {
    const staticFiles = sync('./static/*', {
        ignore: ['./static/favicon.ico', './static/robots.txt', './static/assets', './static/404.js', './static/*.zip', './static/js']
    });
    if (staticFiles.length) rm('-rf', staticFiles);
    rm('-rf', ['./.cache', './public', './src/pages']);
    mkdir('-p', './.cache');
    const leftToc = sync('./left-toc.json');
    if (leftToc.length) rm('-rf', leftToc);
    done();
});

gulp.task('copy', (done) => {
    mkdir('-p', './src/pages');
    cp('-r', './docs/*', './src/pages');
    cp('-r', './static/404.js', './src/pages');
    const API = sync('./API');
    if (API.length) cp('-r', './API/*', './static');
    done();
});

gulp.task('toc', (done) => {
    generateToc();
    done();
});

gulp.task('postinstall', (done) => {
    runSequence('replace-gatsby-cli', done);
});

gulp.task('replace-gatsby-cli', (done) => {
    rm('-rf', './node_modules/gatsby/node_modules/gatsby-cli');
    cp('-r', `./node_modules/gatsby-remark-image-attributes/package.json`, './node_modules/gatsby-remark-image-attributes/dist');
    done();
});

gulp.task('copy-404-js', (done) => {
    cp('-r', './static/404.js', './src/pages');
    done();
});

gulp.task('build', (done) => {
    runSequence('clean', 'copy', 'toc', 'site-variables', done);
});