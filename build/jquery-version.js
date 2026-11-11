const gulp = require('gulp');
const { readFileSync } = require('fs');
const { sync } = require('glob');
const { logContent } = require('./ej-dataviz-ref');

gulp.task('jquery-version', (done) => {
    const fileNames = sync('./docs/**/*.md*');
    for (let i = 0; i < fileNames.length; i++) {
        var content = readFileSync(fileNames[i], 'utf8');
        var reg = /jquery-[0-9]+.[0-9]+.[0-9]+/g;
        logContent(reg, fileNames[i], content);
    }
    done();
});