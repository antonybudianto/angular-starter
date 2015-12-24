var gulp = require('gulp');
var config = require('../gulp.config')();
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

/* Initialize TS Project */
var tsProject = ts.createProject(config.root + 'tsconfig.json');

/* Watch changed typescripts file and compile it */
gulp.task('watch-ts', function () {
    return gulp.watch(config.tsFiles, function (file) {
        console.log('Compiling ' + file.path + '...');
        return compileTs(file.path);
    });
});

/* Compile typescripts */
gulp.task('tsc', ['clean-ts'], function () {
    var tsFiles = [].concat(config.tsFiles, config.tsSpecFiles);
    return compileTs(tsFiles);
});

gulp.task('tsc-app', ['clean-ts-app'], function () {
    return compileTs(config.tsFiles);
});

gulp.task('tsc-spec', ['clean-ts-spec'], function () {
    return compileTs(config.tsSpecFiles);
});

function compileTs(files) {
    var res = gulp.src(files, {
            base: '.'
        })
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
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