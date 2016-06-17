var gulp = require('gulp');
var config = require('../config')();
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
gulp.task('clean-ts', function () {
    return del([config.tmp]);
});

gulp.task('clean-ts-app', function () {
    return del([config.tmpApp]);
});

gulp.task('clean-ts-test', function () {
    return del([config.tmpTest]);
});