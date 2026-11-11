const gulp = require('gulp');
const shelljs = require('shelljs');
const runSequence = require('gulp4-run-sequence');
const { exit } = require('yargs');
const tsc = "node --max_old_space_size=4096 node_modules/gatsby";
gulp.task('production-build', async () => {
  global.isProduction = true;
  await runSequence('build')
  if(shelljs.exec(`gatsby build --prefix-paths`).code!== 0)
  {
     shelljs.exit(1);
  }
});