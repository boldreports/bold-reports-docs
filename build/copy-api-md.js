const gulp = require('gulp');
const { rm } = require('shelljs');
const { repoName, repos } = require('./config');
const runSequence=require('gulp4-run-sequence');
const copyApi = {
    [repos.embedded.name]: {
        src: 'temp/api/docs/javascript/**/*.md',
        dest: 'docs/javascript-reporting'
    }
};

gulp.task('copy-api-md', (done) => {
    runSequence('git-clone',async()=>{
     await new Promise((resolve) => {
        gulp.src(copyApi[repoName].src)
            .pipe(gulp.dest(copyApi[repoName].dest))
            .on("end", resolve);
    });
    rm('-rf', 'temp');
    done();
});

});