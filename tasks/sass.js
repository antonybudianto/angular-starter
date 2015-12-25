var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../gulp.config')();
 
gulp.task('sass', function () {
    return gulp.src(config.assets + 'styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.assets + 'styles'));
});
 
gulp.task('watch-sass', function () {
    gulp.watch(config.assetsPath.styles + '**/*.scss', ['sass']);
});
