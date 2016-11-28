/**
 * Gulp tasks to build a download file of the GAE Starter Kit with Gulp.
 */

var clean = require('gulp-clean');
var gulp = require('gulp');
var gzip = require('gulp-gzip');
var tar = require('gulp-tar');

var TAR_FILENAME = 'gae-starter-kit-gulp.tar';
var DESTINATION_PATH = 'content/build';

gulp.task('clean_download_file', function() {
  return gulp.src(DESTINATION_PATH, { read: false })
      .pipe(clean());
});

// Build downloadable version of GAE Starter Kit with Gulp
// that contains all the Javascript, CSS, and images to use the starter kit.
gulp.task('build_download_file', ['clean_download_file'], function() {
  return gulp.src([
        // Include content files:
        'content/base/**/*',
        'content/_analytics.tmpl',
        'content/_base.tmpl',
        'content/example.html',
        // Include directories:
        'gulp/**/*',
        'preprocessor/**/*',
        'src/**/*',
        'vendor/**/*',
        // Include root files:
        '.gitignore',
        'app.yaml',
        'appengine_config.py',
        'deploy.sh',
        'Gulpfile.js',
        'package.json',
        // Exclude the following file types:
        '!**/*.pyc'
      ], {
        // The base of files matched with the glob 'content/**/*' is 'content/'.
        // The effect of this is that the file 'content/example.html'
        // looks like 'example.html' to the tar function, so that it is included
        // in the tar file without the directory information.
        //
        // By setting 'base' to the project directory,
        // 'example.html' will look like 'content/example.html'.
        //
        // See https://gulp.readme.io/docs/gulpsrcglobs-options#section-options-base
        base: './'
      })
      .pipe(tar(TAR_FILENAME))
      .pipe(gzip())
      .pipe(gulp.dest(DESTINATION_PATH));
});
