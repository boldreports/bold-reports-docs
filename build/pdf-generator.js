const gulp = require('gulp');
const { writeFileSync, readFileSync, renameSync } = require('fs');
const { exec, rm, mkdir, cp } = require('shelljs');
const { releaseVersion, getToc, rootPath, config, repoName, getRepoInfo } = require('./config');
const { resolve } = require('path');
const zip = require('gulp-zip');
const runSequence = require('gulp4-run-sequence');

const fileName = `boldreports-${getRepoInfo(repoName).url}`;

gulp.task('pdf-pre-generation',  (done) => {
 runSequence('build',()=>{
    rm('-rf', './pdf');
    mkdir('-p', 'pdf/static/assets');

    let routerData = getToc().routerData;
    let paths = Object.keys(routerData);
    let htmlContent = `<?xml version="1.0" encoding="utf-8" ?>
<ul class="treeview">\n`;

    paths.forEach((path) => {
        let routerInfo = routerData[path];
        if (routerInfo.isCommonSrc) {
            htmlContent += `<li><a href="${path.slice(0, path.length - 1)}" >${routerInfo.title[0]}</a></li>\n`;
        } else if (routerInfo.isIndexPage) {
            htmlContent += `<li><a href="${path}index" >${routerInfo.title[0]}</a></li>\n`;
        } else {
            htmlContent += `<li><a href="${path.slice(0, path.length - 1)}" >${routerInfo.title[1]}</a></li>\n`;
        }
    });
    htmlContent += `</ul>`;
    writeFileSync('./pdf/toc.html', htmlContent, 'utf8');

    const coverData = `<coverData>
    <Studio>User Guide</Studio>
    <Platform>Bold Reports Documentation</Platform>
    <Version>v${releaseVersion}</Version>
    <ReleaseDate>${config.additionalInfo.pdf.date}</ReleaseDate>
    <CopyRight>${`Copyright Syncfusion Inc. 2001 - ${new Date().getFullYear()}`}</CopyRight>
    <TOCLevel>${config.additionalInfo.pdf.tocLevel}</TOCLevel>
    </coverData>
    `;

    writeFileSync('./pdf/coverData.xml', coverData, 'utf8');
    cp('-r', './src/pages/*', './pdf');
    cp('-r', './static/assets/*', './pdf/static/assets');
    done();
});
});
gulp.task('pdf', (done) => {
    writeFileSync('./pdf/toc_Append.exe', readFileSync(rootPath + 'pdf/toc_Append.il'), 'utf-8');
    let coverData = resolve('./pdf/coverData.xml');
    let toc = resolve('./pdf/toc.html');
    let toc_append = resolve('./pdf/toc_Append.exe');
    exec(`${toc_append} ${toc} ${coverData}`);
    renameSync('./pdf/PdfFile.pdf', `./pdf/${fileName}.pdf`);
    done();
});

gulp.task('compress-pdf', (done) => {
    gulp.src(`./pdf/${fileName}.pdf`)
        .pipe(zip(`${fileName}.zip`))
        .pipe(gulp.dest('./static'))
        .on("end", () => {
            rm('-rf', './pdf');
            done();
        });
});

gulp.task('generate-pdf', (done) => {
    runSequence('pdf-pre-generation', 'pdf', 'compress-pdf', done);
});