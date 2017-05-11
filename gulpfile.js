/* gulpfile.js */

/* Plugins */
const gulp             = require('gulp'),
      gutil            = require('gulp-util'),
      jade				     = require('gulp-jade-php'),
      sync             = require('gulp-npm-script-sync'),
      clean            = require('gulp-clean'),
      sass             = require('gulp-sass'),
      autoprefixer     = require('gulp-autoprefixer'),
      minifycss        = require('gulp-minify-css'),
      fs               = require('fs'),
      ftp              = require('vinyl-ftp'),
      minimist         = require('minimist');

/* I - O  */
var localDeploy      = require('./config.json'),
      themeName      = localDeploy.theme_name,
      outputDir      = localDeploy.output + '/' + themeName;

input  = {
  'jade': './public/_jade/*.jade',
  'alljade': './public/_jade/**/*.jade'
},
output = {
	'dist': outputDir
};

var filesToMove = [
  './public/library/**/*',
  './public/acf-json/**/*',
  './public/functions.php',
  './public/screenshot.png',
  './public/style.css'
];

var watchFiles = [
  './public/_jade/**/*.jade',
  './public/_sass/**/*.sass',
  './public/*.php',
  './public/*.css',
];

var watchMoveFiles = [
  './public/library/**/*',
  './public/functions.php',
];

// Move
gulp.task('move', function(){
  gulp.src(filesToMove, { base: './public/' })
  .pipe(gulp.dest(output.dist));
});

/* Task Library */
gulp.task('jade',       require('./gulp-tasks/jade')(gulp, jade));
gulp.task('sass',       require('./gulp-tasks/sass')(gulp, sass, autoprefixer, minifycss));
gulp.task('deploy',     require('./gulp-tasks/ftp-deploy')(gulp, ftp, minimist));

// Watch Files
gulp.task('watchjade', function() {
  gulp.watch(watchFiles, ['jade','sass']);
  gulp.watch(watchMoveFiles, ['move']);
});

gulp.task('all',['jade','sass','move']); 

sync(gulp, {
  path: './package.json',
  excluded: ['default','sass','jade','prod']
});
