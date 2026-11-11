const gulp = require('gulp');
const { rm } = require('shelljs');

gulp.task('git-clean-angular', (done) => {
    rm('-rf', './.github-angular');
    done();
});

gulp.task('git-clean-js', (done) => {
    rm('-rf', './.github-js');
    done();
});