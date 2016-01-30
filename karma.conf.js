module.exports = function(config) {
  var configuration = {
    basePath: './',

    frameworks: ['jasmine'],
    browsers: ['PhantomJS2'],
    reporters: ['progress', 'coverage'],

    preprocessors: {
      'app/**/!(*.spec)+(.js)': ['coverage']
    },

    // Generate json used for remap-istanbul
    coverageReporter: {
      dir: 'report/',
      reporters: [
        { type: 'json', subdir: 'report-json' }
      ]
    },

    files: [      
      'node_modules/traceur/bin/traceur-runtime.js',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      // 'node_modules/zone.js/dist/zone-microtask.js',
      // 'node_modules/zone.js/dist/long-stack-trace-zone.js',
      // 'node_modules/zone.js/dist/jasmine-patch.js',
      // 'node_modules/es6-module-loader/dist/es6-module-loader.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/reflect-metadata/Reflect.js',
      'karma-test-shim.js',

      { pattern: 'node_modules/angular2/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'app/**/*.js', included: false, watched: true },
      { pattern: 'test/test-helpers/*.js', included: false, watched: true },
      { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: false, watched: false },

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

  config.set(configuration);
}
