var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var inject = require('gulp-inject');
var ts = require('gulp-typescript');
var liveServer = require('live-server');
var tsProject = ts.createProject('src/tsconfig.json');
var params = {
    port: 8181,
    host: "127.0.0.1",
    open: '/src',
    file: "index.html",
    wait: 1000,
};

gulp.task('serve-dev', ['wiredep', 'watch-ts'], function () {  
    liveServer.start(params);
});

/* Watch changed typescripts file and compile it */
gulp.task('watch-ts', function () {
    return gulp.watch('src/**/*.ts', function (file) {
        console.log('Compiling ' + file.path + '...');
        return tsProject.src(file.path)
            .pipe(ts(tsProject))
            .pipe(gulp.dest('src/'));
    });
});

/* Compile all typescripts */
gulp.task('compile', function () {
    return tsProject.src('src/**/*.ts')
        .pipe(ts(tsProject))
        .pipe(gulp.dest('src/'));
});

gulp.task('wiredep', [], function () {
    return gulp.src('src/index.html')
        .pipe(inject(
            gulp.src([], {read:false}), {empty: true}
        ))
        .pipe(inject(gulp.src(mainBowerFiles(), {
            read: false
        }), {
            name: 'bower'
        }))
        .pipe(gulp.dest('src/'));
});

gulp.task('build-assets', ['styles', 'scripts', 'fonts'], function () {
    return gulp.src('src/index.html')
        .pipe(inject(
            gulp.src([], {read:false}), {name: 'bower', empty: true}
        ))
        .pipe(inject(
            gulp.src([
                'src/assets/lib.css',
                'src/assets/lib.js'
            ],
            {
                read: false
            }),
            {
                relative: true
            }
        ))
        .pipe(gulp.dest('src/'));
});

gulp.task('styles', function () {
    return gulp.src(mainBowerFiles({
        filter: '**/*.css'
    }))
    .pipe(concat('lib.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('src/assets'));
});

gulp.task('fonts', function () {
    return gulp.src(mainBowerFiles({
        filter: '**/fonts/*.*'
    }))
    .pipe(gulp.dest('src/fonts'));
});

gulp.task('scripts', function () {
    return gulp.src(mainBowerFiles({
        filter: '**/*.js'
    }))
    .pipe(concat('lib.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/assets'));
});