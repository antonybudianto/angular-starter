var argv = require('yargs').argv,
    gulp = require('gulp'),
    requireDir = require('require-dir'),
    tasks = requireDir('./tasks');

global.env = argv.env || 'dev';
console.log(global.env);
var config = require('./gulp.config')();

/* Default task */
gulp.task('default', ['serve-dev']);