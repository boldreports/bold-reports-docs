const gulp = require('gulp');
const { lstatSync, existsSync, writeFileSync, readFileSync } = require('fs');
const { mkdir } = require('shelljs');
const { sync } = require('glob');
const runSequence=require('gulp4-run-sequence')
// Ship docs at root 
function shipDocs(source, destination, ignore) {
  const files = sync(source, { silent: true, ignore: ignore });
  for (let i = 0; i < files.length; i++) {
    let paths = files[i].split('/');
    let file = paths[paths.length - 1];
    let target = destination + '/' + file;
    let stats = lstatSync(files[i]);
    if (stats.isDirectory()) {
      if (!existsSync(target)) {
        mkdir('-p', target);
      }
      shipDocs(files[i] + '/*', target);
    } else {
      writeFileSync(target, readFileSync(files[i]));
    }
  }
}

gulp.task('publish',  (done) => {
  runSequence('production-build',()=>{
  mkdir('-p', './cireports');
  mkdir('-p', './cireports/reports-docs');
  shipDocs('./public/*', './cireports/reports-docs');
  done();
});

});
module.exports = {
  shipDocs: shipDocs
};