const gulp = require('gulp');
const { lstatSync, readFileSync, writeFileSync } = require('fs');
const { getToc } = require('./config.js');
const { sync } = require('glob');


gulp.task('site-variables', (done) => {
    const siteDetails = getToc();
    const docsFileNames = sync('./src/pages/**/*.*', {
        ignore: ['./src/pages/**/*.png', './src/pages/**/*.svg', './src/pages/**/*.json', './src/pages/**/*.eot', './src/pages/**/*.ttf',
            './src/pages/**/*.woff', './src/pages/**/*.gif', './src/pages/**/*.jpg', './src/pages/**/*.JPG', './src/pages/**/*.PNG', './src/pages/**/*min.js']
    });

    for (let k = 0; k < docsFileNames.length; k++) {
        if (!lstatSync(docsFileNames[k]).isDirectory())
            replaceStaticVariables(docsFileNames[k], siteDetails);
    }

    const demoFileNames = sync('./static/demos/**/*.*', {
        ignore: ['./static/demos/**/*.png', './static/demos/**/*.svg', './static/demos/**/*.json', './static/demos/**/*.eot', './static/demos/**/*.ttf',
            './static/demos/**/*.woff', './static/demos/**/*.gif', './static/demos/**/*.jpg', './static/demos/**/*.JPG', './static/demos/**/*.PNG']
    });

    for (let i = 0; i < demoFileNames.length; i++) {
        if (!lstatSync(demoFileNames[i]).isDirectory())
            replaceStaticVariables(demoFileNames[i], siteDetails);
    }
    done();
});


function replaceStaticVariables(filePath, siteDetails) {
    let content = readFileSync(filePath, 'utf8');
    content = content
        .replace(/{{site.releaseversion}}/g, siteDetails.siteVersion)
        .replace(/{{site.umsVersion}}/g, siteDetails.umsVersion)
        .replace(/{{site.reportserviceurl}}/g, siteDetails.reportserviceurl)
        .replace(/{{site.githubserviceloc}}/g, siteDetails.githubserviceloc);

    writeFileSync(filePath, content);
}