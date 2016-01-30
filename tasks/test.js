var gulp = require('gulp');
var config = require('../gulp.config')();
var Server = require('karma').Server;
var gulpProtractor = require('gulp-protractor');
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

gulp.task('test', ['clean-report', 'unit-test']);

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

gulp.task('e2e', ['e2e-test']);
gulp.task('driver-update', gulpProtractor['webdriver_update']);
gulp.task('e2e-test', ['driver-update', 'tsc-e2e'], function () {
    gulp.src(config.e2e + '**/*.spec.js')
    .pipe(gulpProtractor.protractor({
        configFile: 'protractor.conf.js',
        args: ['--baseUrl', config.e2eConfig.seleniumTarget]
    }))
    .on('error', function(e) {
        console.log('Error running E2E testing');
        process.exit(1);
    });
});

function remapCoverage () {
    console.log('Remapping coverage to TypeScript format...');
    gulp.src(config.report.path + 'report-json/coverage-final.json')
        .pipe(remapIstanbul({
            reports: {
                'lcovonly': config.report.path + 'remap/lcov.info',
                'json': config.report.path + 'remap/coverage.json',
                'html': config.report.path + 'remap/html-report',
                'text-summary': config.report.path + 'remap/text-summary.txt'
            }
        }))
        .on('finish', function () {
            console.log('Remapping done! View the result in report/remap/html-report');
        });
}