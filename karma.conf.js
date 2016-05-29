module.exports = function(config) {
  var gulpConfig = require('./gulp.config')();
  var dependencies = require('./package.json').dependencies;
  var excludedDependencies = [
    'systemjs', 'zone.js', 'font-awesome'
  ];
  var configuration = {
    basePath: './',

    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],

    preprocessors: {},

    // Generate json used for remap-istanbul
    coverageReporter: {
      dir: 'report/',
      reporters: [
        { type: 'json', subdir: 'report-json' }
      ]
    },

    files: [
      'node_modules/traceur/bin/traceur-runtime.js',
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      'node_modules/systemjs/dist/system.src.js'
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/app/": "/base/src/app/",
      "/src/": "/base/src/",
      "/node_modules/": "/base/node_modules/"
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
  };

  configuration.preprocessors[gulpConfig.tmpApp + '**/!(*.spec)+(.js)'] = ['coverage'];
  configuration.preprocessors[gulpConfig.tmpApp + '**/*.js'] = ['sourcemap'];
  configuration.preprocessors[gulpConfig.tmpTest + '**/*.js'] = ['sourcemap'];

  var files = [
    gulpConfig.tmpTest + 'test-helpers/global/**/*.js',
    gulpConfig.src + 'systemjs.conf.js',
    'karma-test-shim.js',
    createFilePattern(gulpConfig.tmpApp + '**/*.js', { included: false }),
    createFilePattern(gulpConfig.tmpTest + 'test-helpers/*.js', { included: false }),
    createFilePattern(gulpConfig.app + '**/*.html', { included: false }),
    createFilePattern(gulpConfig.app + '**/*.css', { included: false }),
    createFilePattern(gulpConfig.app + '**/*.ts', { included: false, watched: false }),
    createFilePattern(gulpConfig.tmpApp + '**/*.js.map', { included: false, watched: false })
  ];

  configuration.files = configuration.files.concat(files);

  Object.keys(dependencies).forEach(function(key) {
    if(excludedDependencies.indexOf(key) >= 0) { return; }

    configuration.files.push({
        pattern: 'node_modules/' + key + '/**/*.js',
        included: false,
        watched: false
    });
  });

  if (process.env.APPVEYOR) {
    configuration.browsers = ['IE'];
    configuration.singleRun = true;
    configuration.browserNoActivityTimeout = 90000; // Note: default value (10000) is not enough
  }

  config.set(configuration);

  // Helpers
  function createFilePattern(path, config) {
    config.pattern = path;
    return config;
  }
}
