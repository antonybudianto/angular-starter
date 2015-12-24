var gulp = require('gulp');
var Server = require('karma').Server;
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

/**
 * Run test once and exit
 */
gulp.task('test', ['clean-report', 'unit-test']);

gulp.task('unit-test', ['tsc'], function () {
    new Server({
        configFile: __dirname + '/../karma.conf.js',
        singleRun: true
    }, karmaDone).start();

    function karmaDone (exitCode) {
    	console.log('Test Done with exit code: ' + exitCode);
    	console.log('Remapping coverage to TypeScript format...');
    	remapCoverage();
        console.log('Remapping done! View the result in report/remap/html-report');
    }
});

function remapCoverage () {
    gulp.src('report/report-json/coverage-final.json')
        .pipe(remapIstanbul({
            reports: {
                'lcovonly': 'report/remap/lcov.info',
                'json': 'report/remap/coverage.json',
                'html': 'report/remap/html-report'
            }
        }));
}