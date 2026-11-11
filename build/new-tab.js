const gulp = require('gulp');
const { readFileSync, writeFileSync } = require('fs');
const { cp, mkdir } = require('shelljs');
const { getToc, rootPath, demos } = require('./config.js');

let siteVersion;
const angularSamplePath = `./static/demos/${demos.angular}/`;
const jsSamplePath = `./static/demos/${demos.javascript}/`;

const reportViewerHash = 'report-viewer';
const reportDesignerHash = 'report-designer';

const favIconPath = rootPath + 'templates/favicon.ico';

function getPlatformData() {
    return {
        'JavaScript': {
            configuration: JSON.parse(readFileSync(`./demos/${demos.javascript}/samples.json`, 'utf8')),
            htmlTemplate: readFileSync(rootPath + 'templates/javascript/index.html', 'utf8')
        },
        'Angular': {
            configuration: JSON.parse(readFileSync(`./demos/${demos.angular}/samples.json`, 'utf8')),
            htmlTemplate: readFileSync(rootPath + 'templates/angular/index.html', 'utf8'),
            copyFiles: ['config.js', 'main.ts', 'style.css', 'app.module.ts']
        }
    };
}

gulp.task('new-tab-generation', (done) => {
    siteVersion = getToc().siteVersion;
    const platform = getPlatformData();
    angularTabGeneration(platform.Angular);
    jsTabGeneration(platform.JavaScript);
    done();
});

function jsTabGeneration(jsConfig) {
    //demo
    Object.keys(jsConfig.configuration).forEach((control) => {
        let reportPath = control === 'ReportViewer' ? reportViewerHash : reportDesignerHash;
        jsConfig.configuration[control].samples.forEach((sample) => {
            let sampleDirName = sample.sampleName.split(' ').filter(word => word).join('-').toLowerCase();
            let sampleDirPath = `${jsSamplePath}/${reportPath}/${sample.subDirectory ? (sample.subDirectory.trim() + '/' + sampleDirName) : sampleDirName}/`;
            let demoHtml = readFileSync(`${sampleDirPath}/index.html`, 'utf8');
            let htmlContent = jsConfig.htmlTemplate
                .replace(/{{title}}/g, sample.metaData.title)
                .replace(/{{description}}/, sample.metaData.description)
                .replace(/{{version}}/g, siteVersion)
                .replace(/{{body}}/, demoHtml.trim());
            writeFileSync(`${sampleDirPath}index.html`, htmlContent, 'utf8');
            writeFileSync(`${sampleDirPath}_raw.html`, demoHtml.trim(), 'utf8');
            let stack = {
                title: sample.metaData.title,
                description: sample.metaData.description,
                stackBlitzFiles: [
                    "index.html",
                    "index.js"
                ]
            };
            writeFileSync(`${sampleDirPath}stack.json`, JSON.stringify(stack, null, 4), 'utf8');
            cp('-r', favIconPath, `${sampleDirPath}`);
        });
    });
}

function angularTabGeneration(jsConfig) {
    //demo
    Object.keys(jsConfig.configuration).forEach((control) => {
        let reportPath = control === 'ReportViewer' ? reportViewerHash : reportDesignerHash;
        jsConfig.configuration[control].samples.forEach((sample) => {
            let sampleDirName = sample.sampleName.split(' ').filter(word => word).join('-').toLowerCase();
            let sampleDirPath = `${angularSamplePath}/${reportPath}/${sample.subDirectory ? (sample.subDirectory.trim() + '/' + sampleDirName) : sampleDirName}/`;
            let htmlContent = jsConfig.htmlTemplate
                .replace(/{{title}}/g, sample.metaData.title)
                .replace(/{{description}}/, sample.metaData.description)
                .replace(/{{version}}/g, siteVersion);
            writeFileSync(`${sampleDirPath}index.html`, htmlContent, 'utf8');
            cp('-r', jsConfig.copyFiles.map(fname => `${rootPath}templates/angular/${fname}`), `${sampleDirPath}`);
            cp('-r', favIconPath, `${sampleDirPath}`);
        });
    });
}

gulp.task('url-generation', (done) => {
    const platform = getPlatformData();
    let ngData = angularUrlGeneration(platform.Angular);
    ngData = ngData.substring(0, ngData.length - 2);
    let jsData = jsUrlTabGeneration(platform.JavaScript);
    let filecontent = ngData + jsData + "]";
    mkdir('-p', './docs-utilities/src/helper');
    writeFileSync('./docs-utilities/src/helper/url-sample.ts', filecontent);
    done();
});

function angularUrlGeneration(jsConfig) {
    let data = "";
    Object.keys(jsConfig.configuration).forEach((control) => {
        let reportPath = control === 'ReportViewer' ? reportViewerHash : reportDesignerHash;
        jsConfig.configuration[control].samples.forEach((sample) => {
            let sampleDirName = sample.sampleName.split(' ').filter(word => word).join('-').toLowerCase();
            let sampleDirPath = `${angularSamplePath}${reportPath}/${sample.subDirectory ? (sample.subDirectory.trim() + '/' + sampleDirName) : sampleDirName}/`;
            sampleDirPath = sampleDirPath.replace('./static/', '/');
            const sampleName = JSON.stringify(sampleDirName);
            const samplePath = JSON.stringify(sampleDirPath);
            data = data + "{sample:" + sampleName + "," + "url:" + samplePath + "},\n";
        });
    });

    const sampledata = "export let routerAngular=[" + data + "]";
    return sampledata;
}

function jsUrlTabGeneration(jsConfig) {
    let data = "";
    Object.keys(jsConfig.configuration).forEach((control) => {
        let reportPath = control === 'ReportViewer' ? reportViewerHash : reportDesignerHash;
        jsConfig.configuration[control].samples.forEach((sample) => {
            let sampleDirName = sample.sampleName.split(' ').filter(word => word).join('-').toLowerCase();
            let sampleDirPath = `${jsSamplePath}${reportPath}/${sample.subDirectory ? (sample.subDirectory.trim() + '/' + sampleDirName) : sampleDirName}/`;
            sampleDirPath = sampleDirPath.replace('./static/', '/');
            const sampleName = JSON.stringify(sampleDirName);
            const samplePath = JSON.stringify(sampleDirPath);
            data = data + "{sample:" + sampleName + "," + "url:" + samplePath + "},\n";
        });
    });
    return data;
}