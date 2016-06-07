var argv = require('yargs').argv;

global.env = 'dev';
global.env = argv.prod ? 'prod': 'dev';

var gulp = require('gulp');
var requireDir = require('require-dir');
var tasks = requireDir('./tasks');

var config = require('./gulp.config')();

/* Default task */
gulp.task('default', ['serve-dev']);