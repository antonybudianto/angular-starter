var gulp = require('gulp');
var config = require('../gulp.config')();

function startBrowsersync(config) {
    var bs = require("browser-sync").create();
    bs.init(config);
    bs.reload();
}

/* Start live server dev mode */
gulp.task('serve-dev', ['sass', 'tsc-app', 'watch-ts', 'watch-sass'], function () {
    startBrowsersync(config.browserSync.dev);
});

/* Start live server production mode */
gulp.task('serve-build', ['build'], function () {
    startBrowsersync(config.browserSync.prod);
});