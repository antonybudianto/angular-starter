var gulp = require('gulp');
var path = require('path');

var config = require('../config')();

gulp.task('html', function () {
    return gulp.src(config.app + '**/*.html')
        .pipe(gulp.dest(config.tmpApp));
});

gulp.task('watch-html', function () {
    gulp.watch(config.app + '**/*.html', function(file) {
        var des = convertToTmpPath(file);

        return gulp.src(file.path)
        .pipe(gulp.dest(path.dirname(des)));
    });
});

gulp.task('css', function () {
    return gulp.src(config.app + '**/*.css')
        .pipe(gulp.dest(config.tmpApp));
});

gulp.task('watch-css', function () {
    gulp.watch(config.app + '**/*.css', function(file) {
        var des = convertToTmpPath(file);

        return gulp.src(file.path)
        .pipe(gulp.dest(path.dirname(des)));
    });
});

function convertToTmpPath(file) {
	var re = new RegExp('src\\' + path.sep + 'app\\' + path.sep,"g");
	return file.path.replace(re, config.tmpApp);
}