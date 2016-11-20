var gulp = require('gulp');
var config = require('../config')();

gulp.task('html', function () {
    return gulp.src(config.app + '**/*.html')
        .pipe(gulp.dest(config.tmpApp));
});

gulp.task('watch-html', function () {
    gulp.watch(config.app + '**/*.html', ['html']);
});
