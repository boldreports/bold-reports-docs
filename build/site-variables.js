const gulp = require('gulp');
const { lstatSync, readFileSync, writeFileSync } = require('fs');
const { sync } = require('glob');
const { replaceProductName } = require('./product-name.js');

// Replaces the product name placeholders in the pages copied to src/pages.
gulp.task('site-variables', (done) => {
    const docsFileNames = sync('./src/pages/**/*.*', {
        ignore: ['./src/pages/**/*.png', './src/pages/**/*.svg', './src/pages/**/*.json', './src/pages/**/*.eot', './src/pages/**/*.ttf',
            './src/pages/**/*.woff', './src/pages/**/*.gif', './src/pages/**/*.jpg', './src/pages/**/*.JPG', './src/pages/**/*.PNG', './src/pages/**/*min.js']
    });

    for (let k = 0; k < docsFileNames.length; k++) {
        if (lstatSync(docsFileNames[k]).isDirectory()) continue;
        const content = readFileSync(docsFileNames[k], 'utf8');
        const updated = replaceProductName(content);
        if (updated !== content) writeFileSync(docsFileNames[k], updated);
    }
    done();
});
