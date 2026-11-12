var gulp = require("gulp");
require('require-dir')('./build');
module.exports = gulp;
// Need to remove this task, once the server team MR merged
gulp.task('redirect-validation', () => { });
