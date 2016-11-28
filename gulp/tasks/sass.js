/**
 * Gulpfile to bundle the CSS files.
 */

var clean = require('gulp-clean');
var compass = require('gulp-compass');
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var SOURCE_PATTERN = 'src/sass/**/*.scss';
var DESTINATION_PATH = 'content/build/css';

gulp.task('clean_app_css', function() {
  return gulp.src(DESTINATION_PATH, { read: false })
      .pipe(clean());
});

gulp.task('build_app_css', ['clean_app_css'], function() {
  return gulp.src([SOURCE_PATTERN])
    .pipe(sourcemaps.init())
    .pipe(
      compass({
          css: DESTINATION_PATH,
          sass: 'src/sass/'
        })
        .on('error', function(error) {
          console.log(error.message);
        })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DESTINATION_PATH));
});

gulp.task('watch_app_css', ['build_app_css'], function() {
  gulp.watch([SOURCE_PATTERN], ['build_app_css']);
});
