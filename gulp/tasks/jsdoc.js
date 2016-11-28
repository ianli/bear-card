var gulp = require('gulp');
var jsdoc = require('gulp-jsdoc3');

var SOURCE_PATTERN = ['src/**/*.js', 'src/**/README.md'];

gulp.task('build_doc', function (cb) {
  var config = require('./jsdocConfig');
  gulp.src(SOURCE_PATTERN, { read: false })
    .pipe(jsdoc(config, cb));
});

gulp.task('watch_doc', ['build_doc'], function() {
  gulp.watch(SOURCE_PATTERN, ['build_doc']);
});
