var gulp = require('gulp'),
    requireDir = require('require-dir'),
    tasks = requireDir('./tasks');

var config = require('./gulp.config')();

/* Default task */
gulp.task('default', ['serve-dev']);