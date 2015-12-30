module.exports = function(config) {
  var configuration = {
    basePath: '.',

    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    reporters: ['progress', 'coverage'],

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    preprocessors: {
      'app/**/!(*.spec)+(.js)': ['coverage']
    },

    coverageReporter: {
      dir: 'report/',
      reporters: [
        { type: 'json', subdir: 'report-json' }
      ]
    },

    files: [
      {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true},
      {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
      {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/router.dev.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
      {pattern: 'test-helpers/**/*.js', included: true, watched: true},
      {pattern: 'karma-test-shim.js', included: true, watched: true},

      // paths loaded via module imports
      {pattern: 'app/**/*.js', included: false, watched: true},

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: 'app/**/*.html', included: false, watched: true},
      {pattern: 'app/**/*.css', included: false, watched: true},

      // paths to support debugging with source maps in dev tools
      {pattern: 'app/**/*.ts', included: false, watched: false},
      {pattern: 'app/**/*.js.map', included: false, watched: false}
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/app/": "/base/app/"
    },

    
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true
  };

  /* Set Travis CI */
  if(process.env.TRAVIS){
    configuration.browsers = ['Chrome_travis_ci'];
  }

  config.set(configuration);
}
