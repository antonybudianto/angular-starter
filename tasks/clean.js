var gulp = require('gulp');
var config = require('../gulp.config')();
var del = require('del');

/* Run all clean tasks */
gulp.task('clean', ['clean-build', 'clean-report', 'clean-ts', 'clean-sass']);

/* Clean build folder */
gulp.task('clean-build', function () {
    return del([config.build.path]);
});

/* Clean report folder */
gulp.task('clean-report', function () {
    return del([config.report.path]);
});

/* Clean sass compile */
gulp.task('clean-sass', function () {
    return del([config.assetsPath.styles + '**/*.css']);
});

/* Clean js and map */
gulp.task('clean-ts', ['clean-ts-app', 'clean-ts-test']);

gulp.task('clean-ts-app', function () {
    return del([
        config.app + '**/*.js',
        config.app + '**/*.js.map'
    ]);
});

gulp.task('clean-ts-test', function () {
    return del([
        config.app + '**/*.spec.js',
        config.app + '**/*.spec.js.map',
        config.test + '**/*.js',
        config.test + '**/*.js.map'
    ]);
});