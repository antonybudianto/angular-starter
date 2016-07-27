var gulp = require('gulp'),
    requireDir = require('require-dir'),
    tasks = requireDir('./config/gulp/tasks'),
    dashboard = require('./config/gulp/utils/dashboard');

dashboard.show();

/* Default task */
gulp.task('default', ['serve-dev']);
