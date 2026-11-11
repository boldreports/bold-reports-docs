const gulp = require('gulp');
const runSequence = require('gulp4-run-sequence');

gulp.task('git-angular', (done) => {
    runSequence('git-clean-angular',
        'build',
        'git-clone-angular',
        'generate-angular-router',
        'git-test-angular',
        'git-commit-angular',
    done);
});

gulp.task('git-js', (done) => {
    runSequence('git-clean-js',
        'build',
        'git-clone-js',
        'generate-js-router',
        'git-commit-js',
    done);
});