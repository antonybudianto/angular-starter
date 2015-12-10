var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var inject = require('gulp-inject');
var ts = require('gulp-typescript');
var liveServer = require('live-server');
var tsProject = ts.createProject('src/tsconfig.json');
var config = require('./gulp.config')();
var clean = require('gulp-clean');
var params = {
    port: 8181,
    host: "127.0.0.1",
    open: '/src',
    file: "index.html",
    wait: 1000,
};

gulp.task('default', ['serve-dev']);

/* Start live server */
gulp.task('serve-dev', ['wiredep', 'watch-ts'], function () {  
    liveServer.start(params);
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
gulp.task('compile-ts', function () {
    return tsProject.src(config.tsFiles)
        .pipe(ts(tsProject))
        .pipe(gulp.dest(config.root));
});

/* Wiredep the bower main files to index file */
gulp.task('wiredep', function () {
    return gulp.src(config.index)
        .pipe(inject(
            gulp.src([], {read:false}), {empty: true}
        ))
        .pipe(inject(gulp.src(mainBowerFiles(), {
            read: false
        }), {
            name: 'bower'
        }))
        .pipe(gulp.dest(config.root));
});

/* Concat and minify/uglify all css, js, and copy fonts */
gulp.task('build-assets', ['styles', 'scripts', 'fonts'], function () {
    return gulp.src(config.index)
        .pipe(inject(
            gulp.src([], {read:false}), {name: 'bower', empty: true}
        ))
        .pipe(inject(
            gulp.src([
                config.assetPath.lib.css,
                config.assetPath.lib.js
            ],
            {
                read: false
            }),
            {
                relative: true
            }
        ))
        .pipe(gulp.dest(config.root));
});

/* Minify all bower css */
gulp.task('styles', function () {
    return gulp.src(mainBowerFiles({
        filter: '**/*.css'
    }))
    .pipe(concat(config.build.assets.lib.css))
    .pipe(minifyCss())
    .pipe(gulp.dest(config.assets));
});

/* Copy fonts in bower */
gulp.task('fonts', function () {
    return gulp.src(mainBowerFiles({
        filter: '**/fonts/*.*'
    }))
    .pipe(gulp.dest(config.assetPath.fonts));
});

/* Uglify all bower js */
gulp.task('scripts', function () {
    return gulp.src(mainBowerFiles({
        filter: '**/*.js'
    }))
    .pipe(concat(config.build.assets.lib.js))
    .pipe(uglify())
    .pipe(gulp.dest(config.assets));
});

/* Clean build folder */
gulp.task('clean', function () {
    return gulp.src(config.build.path, {read: false})
        .pipe(clean());
});