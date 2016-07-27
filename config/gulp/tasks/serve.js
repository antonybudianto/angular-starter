var envConfig = require('../utils/env');

if (envConfig.ENV === envConfig.ENVS.DEV)
{
    var gulp = require('gulp');
    var config = require('../config')();
    var bs = require("browser-sync");

    function startBrowsersync (config)
    {
        bsIns = bs.create();
        bsIns.init(config);
        bsIns.reload();
    }

    /* Start live server dev mode */
    gulp.task('serve-dev', ['sass', 'tsc-app', 'watch-ts', 'watch-sass'], function ()
    {
        startBrowsersync(config.browserSync.dev);
    });

    /* Start live server production mode */
    gulp.task('serve-build', ['build'], function ()
    {
        startBrowsersync(config.browserSync.prod);
    });
}
