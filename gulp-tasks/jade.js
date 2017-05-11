module.exports = function ( gulp, jade ) {
  return function () {
    gulp.src(input.jade)
        .pipe(jade({
          pretty: true
          //pretty: '\t'  // Set to false to minify/uglify the PHP
        }))
        .pipe(gulp.dest(output.dist));
  };
};