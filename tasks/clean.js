var gulp = require('gulp');
var config = require('../gulp.config')();
var del = require('del');

/* Run all clean tasks */
gulp.task('clean', ['clean-build', 'clean-report', 'clean-ts']);

/* Clean build folder */
gulp.task('clean-build', function () {
    del([config.build.path]);
});

gulp.task('clean-report', function () {
    del([config.report.path]);
});

/* Clean js and map */
gulp.task('clean-ts', ['clean-ts-app', 'clean-ts-spec']);

gulp.task('clean-ts-app', function () {
    del([
    	config.app + '**/*.js',
    	config.app + '**/*.js.map'
    ]);
});

gulp.task('clean-ts-spec', function () {
    del([
        config.app + '**/*.spec.js',
        config.app + '**/*.spec.js.map',
        config.testHelper + '**/*.js',
        config.testHelper + '**/*.js.map'
    ]);
});