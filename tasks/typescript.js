var gulp = require('gulp');
var config = require('../gulp.config')();
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

/* Initialize TS Project */
var tsProject = ts.createProject(config.root + 'tsconfig.json');
var typingFiles = [
    'typings/browser.d.ts',
    'node_modules/angular2/typings/browser.d.ts'
];
var tsUnitFiles = [].concat(config.tsTestFiles.unit, config.tsTestFiles.helper);
var tsE2EFiles = [].concat(config.tsTestFiles.e2e, config.tsTestFiles.helper);
var tsFiles = [].concat(config.tsFiles, tsUnitFiles, tsE2EFiles);

/* Watch changed typescripts file and compile it */
gulp.task('watch-ts', function () {
    return gulp.watch(tsFiles, function (file) {
        console.log('Compiling ' + file.path + '...');
        return compileTs(file.path, true);
    });
});

/* Compile typescripts */
gulp.task('tsc', ['clean-ts'], function () {
    return compileTs(tsFiles);
});

gulp.task('tsc-app', ['clean-ts-app'], function () {
    return compileTs(config.tsFiles);
});

gulp.task('tsc-unit', ['clean-ts-test'], function () {
    return compileTs(tsUnitFiles);
});

gulp.task('tsc-e2e', ['clean-ts-test'], function () {
    return compileTs(tsE2EFiles);
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

gulp.task('tslint-e2e', function () {
    return lintTs(tsE2EFiles);
});

function lintTs(files) {
    return gulp.src(files)
        .pipe(tslint())
        .pipe(tslint.report('prose', {
          summarizeFailureOutput: true
        }));
}

function compileTs(files, watchMode) {
    watchMode = watchMode || false;
    var allFiles = [].concat(files, typingFiles);
    var res = gulp.src(allFiles, {
            base: '.'
        })
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            summarizeFailureOutput: true,
            emitError: !watchMode
        }))
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .on('error', function () {
            process.exit(1);
        });
    return res.js
        .pipe(sourcemaps.write('.', {
              // Return relative source map root directories per file.
              includeContent: false,
              sourceRoot: function (file) {
                var sourceFile = path.join(file.cwd, file.sourceMap.file);
                return path.relative(path.dirname(sourceFile), file.cwd);
              }
            }))
        .pipe(gulp.dest(config.root));
}