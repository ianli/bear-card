/**
 * Gulp tasks for images
 * @see https://css-tricks.com/gulp-for-beginners/#article-header-id-11
 * @see http://stackoverflow.com/questions/32416485/can-i-use-gulp-imagemin-with-gulp-watch
 */

var cache = require('gulp-cache');
var clean = require('gulp-clean');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

var SOURCE_PATTERN = 'src/images/**/*';
var DESTINATION_PATH = 'content/build/images';

// Patterns of files to watch for changes.
var WATCH_PATTERNS = [SOURCE_PATTERN, 'src/sass/**/*'];

gulp.task('clean_images', function() {
  return gulp.src(DESTINATION_PATH, { read: false })
      .pipe(clean());
});

gulp.task('copy_images', ['clean_images'], function() {
  return gulp.src(SOURCE_PATTERN)
    .pipe(
      // Cache images that ran through imagemin
      // because optimizing images is time consuming.
      cache(
        imagemin()
      )
    )
    .pipe(gulp.dest(DESTINATION_PATH));
});

gulp.task('watch_images', ['copy_images'], function() {
  gulp.watch(WATCH_PATTERNS, ['copy_images']);
});
