var gulp = require('gulp');
var runSequence = require('run-sequence');

var config = require('../config')();

gulp.task('html', function () {
    return gulp.src(config.app + '**/*.html')
        .pipe(gulp.dest(config.tmpApp));
});

gulp.task('watch-html', function () {
    gulp.watch(config.app + '**/*.html', ['html']);
});

gulp.task('css', function () {
    return gulp.src(config.app + '**/*.css')
        .pipe(gulp.dest(config.tmpApp));
});

gulp.task('watch-css', function () {
    gulp.watch(config.app + '**/*.css', function() {
        runSequence('css', 'tsc-app');
    });
});
