module.exports = function ( gulp, ftp, minimist ) {
  return function () {

  const config = require('../config.json')
  const args   = minimist(process.argv.slice(2));
  const globs = [
          'dist/**',
          'index.html',
          'assets/**',
          '.htaccess'
        ],
        remoteFolder = config.remoteFolder;

  function getFtpConnection() {
    return ftp.create({
      host: config.host,
      port: 21,
      user: args.user,
      password: args.password,
      parallel: 5
    });
  }

  const conn = getFtpConnection();

  gulp.src(globs, { base: '.', buffer: false })
    .pipe( conn.newer( config.remoteFolder ) )
    .pipe( conn.dest( config.remoteFolder ) );
  };
};