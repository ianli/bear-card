/**
 * Gulpfile to bundle the Javascript files using Browserify.
 *
 * @see http://browserify.org/
 * @see http://tylermcginnis.com/reactjs-tutorial-pt-2-building-react-applications-with-gulp-and-browserify/
 */

// NPM packages
var aliasify = require('aliasify');
var babelify = require('babelify');
var browserify = require('browserify');
var clean = require('gulp-clean');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

// Babelify presets
var reactPreset = require('babel-preset-react');
var es2015Preset = require('babel-preset-es2015');

var ENTRY_POINT = './src/js/app.js';
var SOURCE_PATH = 'src/js';
var OUTPUT_FILE = 'app.js';
var DESTINATION_PATH = 'build/js';

gulp.task('clean_app_js', function() {
  return gulp.src(DESTINATION_PATH, { read: false })
      .pipe(clean());
});

gulp.task('build_app_js', ['clean_app_js'], function() {
  var b = setupBrowserify(ENTRY_POINT, SOURCE_PATH);
  return invokeBrowserify(b, OUTPUT_FILE, DESTINATION_PATH);
});

gulp.task('watch_app_js', ['clean_app_js'], function() {
  var b = setupBrowserify(ENTRY_POINT, SOURCE_PATH);
  return setupWatchify(b, OUTPUT_FILE, DESTINATION_PATH);
});

///////////////////////////
// FUNCTIONS
//

function setupBrowserify(entryPoint, sourcePath) {
  return browserify({
    entries: entryPoint,
    debug: true,
    cache: {}, // required for watchify
    // Process files that end in JS and JSX.
    extensions: ['.js', '.jsx'],
    packageCache: {}, // required for watchify
    // This preset doesn't work anymore.
    // transform: [babelify, reactify],
    // Replace with this setup: http://stackoverflow.com/a/33515294
    transform: [
      babelify.configure({
        'presets': [reactPreset, es2015Preset]
      }),
      aliasify
    ],
    paths: [
      sourcePath
    ]
  });
}

function invokeBrowserify(b, outputFile, destinationPath) {
  return b.bundle()
    .on('error', function(error) {
      console.log(error.message);
    })
    .pipe(source(outputFile))
    .pipe(gulp.dest(destinationPath));
}

function setupWatchify(browserifyObj, outputFile, destinationPath) {
  // Use watchify to speed up Browserify builds.
  // https://github.com/substack/watchify
  // https://truongtx.me/2014/08/06/using-watchify-with-gulp-for-fast-browserify-build/

  // Watcher is exactly like browserify bundle except that it caches file
  // contents and emits an 'update' event when a file changes.
  var watcher = watchify(browserifyObj);

  // Invoke bundle for the first time without waiting on update.
  invokeBrowserify(watcher, outputFile, destinationPath);

  // Watch for files that get updated.
  watcher.on('update', function() {
    invokeBrowserify(watcher, outputFile, destinationPath);
  });

  return watcher;
}
