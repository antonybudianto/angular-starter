var gulp = require('gulp');
var liveServer = require('live-server');
var config = require('../gulp.config')();

/* Start live server dev mode */
gulp.task('serve-dev', ['wiredep', 'tsc-app', 'watch-ts'], function () {  
    liveServer.start(config.liveServer.dev);
});

/* Start live server production mode */
gulp.task('serve-build', ['build-sjs'], function () {
    liveServer.start(config.liveServer.prod);
});