const gulp = require('gulp');
const git = require('simple-git');

let githubAngularRepo = `https://boldreports:${process.env.REPORTS_OAUTH_TOKEN}@github.com/boldreports/angular-docs-samples.git`;
let githubJsRepo = `https://boldreports:${process.env.REPORTS_OAUTH_TOKEN}@github.com/boldreports/javascript-docs-samples.git`;

gulp.task('git-clone-angular', (done) => {
  git().silent(false)
    .clone(githubAngularRepo, '.github-angular', function (errorLog) {
      if (errorLog)
        console.log(errorLog);
      done();
    })
});

gulp.task('git-clone-js', (done) => {
  git().silent(false)
    .clone(githubJsRepo, '.github-js', function (errorLog) {
      if (errorLog)
        console.log(errorLog);
      done();
    })
});

gulp.task('git-commit-angular', (done) => {
  let message = 'testing';
  git('.github-angular/').init()
    .add('./*')
    .commit(message)
    .push(githubAngularRepo, 'master', () => {
     done();
    });
});

gulp.task('git-commit-js', (done) => {
  let message = 'testing';
  git('.github-js/').init()
    .add('./*')
    .commit(message)
    .push(githubJsRepo, 'master', () => {
    done();
  });
});