const gulp = require('gulp');
const { rm, mkdir, cp, mv } = require('shelljs');
const { generateToc } = require('./toc.js');
const { sync } = require('glob');
const runSequence = require('gulp4-run-sequence');
const { readFileSync, writeFileSync, existsSync, statSync, copyFileSync } = require('fs');
const { dirname } = require('path');
const { replaceProductName } = require('./product-name.js');

const PAGES_DIR = './src/pages/';
const TEXT_FILE = /\.(md|html?|txt)$/i;

// 'docs/a/b.md' (any slash style) -> 'a/b.md'
function toPagePath(docsFile) {
    return docsFile.replace(/\\/g, '/').replace(/^(\.\/)?docs\//, '');
}

// Copies one file from docs/ to src/pages/, replacing the product name placeholders.
// The file is written only when its content changed, so Gatsby rebuilds only what changed.
function syncPage(docsFile) {
    const dest = PAGES_DIR + toPagePath(docsFile);
    mkdir('-p', dirname(dest));
    if (TEXT_FILE.test(docsFile)) {
        const content = replaceProductName(readFileSync(docsFile, 'utf8'));
        if (existsSync(dest) && readFileSync(dest, 'utf8') === content) return false;
        writeFileSync(dest, content);
        return true;
    }
    const source = statSync(docsFile);
    if (existsSync(dest)) {
        const target = statSync(dest);
        if (target.size === source.size && target.mtimeMs >= source.mtimeMs) return false;
    }
    copyFileSync(docsFile, dest);
    return true;
}

function removePage(docsFile) {
    const dest = PAGES_DIR + toPagePath(docsFile);
    if (existsSync(dest)) rm('-f', dest);
}

gulp.task('clean', (done) => {
    const staticFiles = sync('./static/*', {
        ignore: ['./static/favicon.ico', './static/robots.txt', './static/images', './static/404.js', './static/*.zip']
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

// Brings src/pages in line with docs/ without deleting Gatsby's cache.
gulp.task('sync-pages', (done) => {
    mkdir('-p', PAGES_DIR);
    const keep = new Set(['404.js']);
    let changed = 0;
    sync('./docs/**/*', { nodir: true }).forEach((docsFile) => {
        keep.add(toPagePath(docsFile));
        if (syncPage(docsFile)) changed++;
    });
    let removed = 0;
    sync(PAGES_DIR + '**/*', { nodir: true }).forEach((pageFile) => {
        if (!keep.has(pageFile.replace(PAGES_DIR, ''))) {
            rm('-f', pageFile);
            removed++;
        }
    });
    cp('-r', './static/404.js', PAGES_DIR);
    console.log(`Pages synced: ${changed} updated, ${removed} removed.`);
    done();
});

gulp.task('build', (done) => {
    runSequence('clean', 'copy', 'toc', 'site-variables', done);
});

module.exports = { syncPage, removePage };
