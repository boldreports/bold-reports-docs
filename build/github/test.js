const gulp = require('gulp');
const { exec } = require('shelljs');

gulp.task('git-test-angular',(done) => {
    process.chdir('.github-angular');
    let npmExecution = exec('npm install');
    if (npmExecution.code !== 0) {
        console.log('err:', npmExecution.stderr)        
        process.exit(1);      
    }
    let buildExecution = exec('node_modules\\.bin\\ng build');
    if (buildExecution.code !== 0) {
        console.log('err:', buildExecution.stderr)
        process.exit(1);
    }
    process.chdir('../');
    done();
});