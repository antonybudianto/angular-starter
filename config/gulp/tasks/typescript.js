var gulp = require('gulp');
var util = require('gulp-util');
var config = require('../config')();
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var sourcemaps = require('gulp-sourcemaps');
var argv = require('yargs').argv;

/* Initialize TS Project */
var typingFiles = [
    config.src + 'manual_typings/**/*.d.ts'
];
var tsUnitFiles = [].concat(config.tsTestFiles.unit, config.tsTestFiles.helper);
var tsFiles = [].concat(config.tsFiles, tsUnitFiles);

/* Watch changed typescripts file and compile it */
gulp.task('watch-ts', function () {
    return gulp.watch(tsFiles, function (file) {
        util.log('Compiling ' + file.path + '...');
        return compileTs(file.path, true);
    });
});

/* Compile typescripts */
gulp.task('tsc', ['clean-ts', 'env'], function () {
    return compileTs(tsFiles);
});

gulp.task('tsc-app', ['env'], function () {
    return compileTs(config.tsFiles);
});

gulp.task('tsc-unit', ['clean-ts-test'], function () {
    return compileTs(tsUnitFiles);
});

/* Lint typescripts */
gulp.task('tslint', function () {
    return lintTs(tsFiles);
});

gulp.task('tslint-app', function () {
    return lintTs(config.tsFiles);
});

gulp.task('tslint-unit', function () {
    return lintTs(tsUnitFiles);
});

function lintTs(files) {
    return gulp.src(files)
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report());
}

function compileTs(files, watchMode) {
    watchMode = watchMode || false;

    var tsProject = ts.createProject('tsconfig.json');
    var allFiles = [].concat(files, typingFiles);
    var res = gulp.src(allFiles, {
            base: config.src,
            outDir: config.tmp
        })
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report())
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .on('error', function () {
            if (watchMode) {
                return;
            }
            process.exit(1);
        });
    return res.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.tmp));
}