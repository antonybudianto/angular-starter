var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var inject = require('gulp-inject');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var ts = require('gulp-typescript');
var liveServer = require('live-server');
var config = require('./gulp.config')();
var del = require('del');
var Builder = require('systemjs-builder');

/* Initialize TS Project */
var tsProject = ts.createProject(config.root + 'tsconfig.json');

/* Default task */
gulp.task('default', ['serve-dev']);

/* Start live server dev mode */
gulp.task('serve-dev', ['wiredep', 'compile-ts', 'watch-ts'], function () {  
    liveServer.start(config.liveServer.dev);
});

/* Start live server production mode */
gulp.task('serve-build', ['build-sjs'], function () {
    liveServer.start(config.liveServer.prod);
});

/* Watch changed typescripts file and compile it */
gulp.task('watch-ts', function () {
    return gulp.watch(config.tsFiles, function (file) {
        console.log('Compiling ' + file.path + '...');
        return tsProject.src(file.path)
            .pipe(ts(tsProject))
            .pipe(gulp.dest(config.root));
    });
});

/* Compile all typescripts */
gulp.task('compile-ts', ['clean-compile'], function () {
    return tsProject.src(config.tsFiles)
        .pipe(ts(tsProject))
        .pipe(gulp.dest(config.root));
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

/* Prepare build using SystemJS Builder */
gulp.task('build-sjs', ['build-assets'], function () {
    var builder = new Builder('.');
    builder.config({
        map: {
            'angular2': 'node_modules/angular2',
            'rxjs': 'node_modules/rxjs'
        },
        packages: {
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
    });
    builder.loader.defaultJSExtensions = true;
    builder
        .bundle(config.app + 'boot', config.build.path + 'app/boot.js', {
            minify: true
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
gulp.task('build-assets', ['clean', 'wiredep', 'fonts', 'compile-ts'], function () {
    return gulp.src(config.index)
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss({
            processImport: false
        })))
        .pipe(gulp.dest(config.build.path));
});

/* Copy fonts in bower */
gulp.task('fonts', function () {
    return gulp.src(mainBowerFiles({
        filter: '**/fonts/*.*'
    }))
    .pipe(gulp.dest(config.assetPath.fonts));
});

/* Clean build folder */
gulp.task('clean', function () {
    del([config.build.path + '**/*.*']);
});

/* Clean js and map */
gulp.task('clean-compile', function () {
    return del([config.app + '**/*.js', config.app + '**/*.js.map']);
});