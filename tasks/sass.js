var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../gulp.config')();
var replace = require('gulp-replace');
 
gulp.task('set-theme', function () {
    return gulp.src(config.assetsPath.styles + 'bootswatch.scss')
        .pipe(replace(/bootswatch\/[^\/]+\//g, 'bootswatch/'+ config.theme + '/'))
        .pipe(gulp.dest(config.assetsPath.styles));
});

gulp.task('sass', ['set-theme'], function () {
    return gulp.src(config.assetsPath.styles + 'main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.assetsPath.styles));
});
 
gulp.task('watch-sass', function () {
    gulp.watch(config.assetsPath.styles + '**/*.scss', ['sass']);
});
