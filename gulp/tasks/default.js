/**
 * Default Gulp task
 */

var gulp = require('gulp');

gulp.task('default', ['watch']);

// Task to build the different files.
gulp.task('build', [
  'build_app_js',
  // 'build_app_css',
  // 'copy_images',
  // 'build_doc'
]);

// Task to watch changes for files, then build them.
gulp.task('watch', [
  'watch_app_js',
  // 'watch_app_css',
  // 'watch_images',
  // 'watch_doc'
]);
