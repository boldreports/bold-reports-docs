/*!
*  filename: production.js
*  version : 2.3.26
*  Copyright © 2001 - 2021 Syncfusion Inc. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
const gulp = require('gulp');
const { exec } = require('shelljs');
const runSequence = require('run-sequence');

gulp.task('production-build', () => {
  global.isProduction = true;
  runSequence('build');
  exec(`gatsby build --prefix-paths`);
});