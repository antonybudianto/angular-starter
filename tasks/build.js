var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../gulp.config')();
var inject = require('gulp-inject');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var mainBowerFiles = require('main-bower-files');
var Builder = require('systemjs-builder');

/* Prepare build using SystemJS Builder */
gulp.task('build', function (done) {
    runSequence('test', 'build-sjs', done);
});

gulp.task('build-sjs', ['build-assets', 'tsc-app'], function () {
    var builder = new Builder('.');
    builder.config(config.systemjsBuild);
    builder.loader.defaultJSExtensions = true;
    builder
        .bundle(config.app + 'boot',
                config.build.path + config.app + 'boot.js', 
        {
            minify: true,
            globalDefs: { DEBUG: false }
        })
        .then(function () {
            console.log('Build complete');
        })
        .catch(function (ex) {
            console.log('error', ex);
        });

    gulp.src(config.app + '**/*.html', {
        base: config.app
    })
    .pipe(gulp.dest(config.build.app));

    gulp.src(config.app + '**/*.css', {
        base: config.app
    })
    .pipe(cssnano())
    .pipe(gulp.dest(config.build.app));
});

/* Concat and minify/uglify all css, js, and copy fonts */
gulp.task('build-assets', function () {
    runSequence('clean-build', ['wiredep', 'fonts'], function () {
        gulp.src(config.index)
            .pipe(useref())
            .pipe(gulpif('*.js', uglify()))
            .pipe(gulpif('*.css', cssnano()))
            .pipe(gulp.dest(config.build.path));
    });
});

/* Copy fonts in bower */
gulp.task('fonts', function () {
    gulp.src(mainBowerFiles({
        filter: '**/fonts/*.*'
    }))
    .pipe(gulp.dest(config.buildPath.fonts));
});

/* Wiredep the bower main files to index file */
gulp.task('wiredep', ['sass'], function () {
    return gulp.src(config.index)
        .pipe(inject(gulp.src(mainBowerFiles(), {
            read: false
        }), {
            name: 'bower'
        }))
        .pipe(inject(
            gulp.src(config.assetsPath.styles + 'main.css', {
                read: false
            })
        , {
            name: 'app'
        }))
        .pipe(gulp.dest(config.root));
});