const gulp = require('gulp');
const { exec } = require('shelljs');
const runSequence= require('gulp4-run-sequence');
gulp.task('serve', async () => {
    await runSequence('build', 'copy-404-js')
    exec('gatsby develop');
});