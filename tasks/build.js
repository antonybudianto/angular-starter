var gulp = require('gulp');
var config = require('../gulp.config')();
var inject = require('gulp-inject');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var mainBowerFiles = require('main-bower-files');
var Builder = require('systemjs-builder');

/* Prepare build using SystemJS Builder */
gulp.task('build-sjs', ['build-assets', 'tsc-app'], function () {
    var builder = new Builder('.');
    builder.config(config.systemjsBuild);
    builder.loader.defaultJSExtensions = true;
    builder
        .bundle(config.app + 'boot', config.build.path + 'app/boot.js', {
            minify: true,
            globalDefs: { DEBUG: false }
        })
        .then(function () {
            console.log('Build complete');
        })
        .catch(function (ex) {
            console.log('error', ex);
        });

    gulp.src('app/**/*.html', {
        base: 'app'
    })
    .pipe(gulp.dest(config.build.path + 'app'));
});

/* Concat and minify/uglify all css, js, and copy fonts */
gulp.task('build-assets', ['clean-build', 'wiredep', 'fonts'], function () {
    gulp.src(config.index)
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss({
            processImport: false
        })))
        .pipe(gulp.dest(config.build.path));
});

/* Copy fonts in bower */
gulp.task('fonts', function () {
    gulp.src(mainBowerFiles({
        filter: '**/fonts/*.*'
    }))
    .pipe(gulp.dest(config.assetPath.fonts));
});

/* Wiredep the bower main files to index file */
gulp.task('wiredep', function () {
    return gulp.src(config.index)
        .pipe(inject(gulp.src(mainBowerFiles(), {
            read: false
        }), {
            name: 'bower'
        }))
        .pipe(gulp.dest(config.root));
});