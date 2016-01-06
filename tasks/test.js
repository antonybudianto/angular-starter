var gulp = require('gulp');
var config = require('../gulp.config')();
var Server = require('karma').Server;
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

/**
 * Run test once and exit
 */
gulp.task('test', ['clean-report', 'tslint', 'unit-test']);

gulp.task('unit-test', ['tsc'], function (done) {
    new Server({
        configFile: __dirname + '/../karma.conf.js',
        singleRun: true
    }, karmaDone).start();

    function karmaDone (exitCode) {
    	console.log('Test Done with exit code: ' + exitCode);
    	remapCoverage();
        if(exitCode === 0) {
            done();
        } else {
            done('Unit test failed.');
        }
    }
});

function remapCoverage () {
    console.log('Remapping coverage to TypeScript format...');
    gulp.src(config.report.path + 'report-json/coverage-final.json')
        .pipe(remapIstanbul({
            reports: {
                'lcovonly': config.report.path + 'remap/lcov.info',
                'json': config.report.path + 'remap/coverage.json',
                'html': config.report.path + 'remap/html-report'
            }
        }))
        .on('finish', function () {
            console.log('Remapping done! View the result in report/remap/html-report');
        });
}