module.exports = function ( gulp, sass, autoprefixer, minifycss ) {
  return function () {
      gulp.src('./public/_sass/main.sass')
        .pipe(sass())
        .pipe(autoprefixer({
          browsers: ['last 2 versions','last 3 iOS versions','> 1%'],
          cascade: true
      }))
      .pipe(gulp.dest('./public/_temp'))
      .pipe(minifycss())
      .pipe(gulp.dest(output.dist + '/library/'));
  };
};