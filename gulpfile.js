var gulp = require("gulp");
require('require-dir')('./node_modules/@boldreports/docs-helper/src');
module.exports = gulp;
// Need to remove this task, once the server team MR merged
gulp.task('redirect-validation', () => { });
