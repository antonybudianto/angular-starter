// Turn on full stack traces in errors to help debugging
Error.stackTraceLimit=Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

// Cancel Karma's synchronous start,
// we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function() {};

System.config({
    baseURL: '/base/',
    defaultJSExtensions: true,
    paths: {
        'angular2/*': 'node_modules/angular2/*.js',
        'rxjs/*': 'node_modules/rxjs/*.js'
    },
    meta: {
        'app/*': {
            format: 'register'
        }
    }
});

System.import('test/test-helpers/setup')
.then(function() {
    return Promise.all(
        Object.keys(window.__karma__.files)
        .filter(onlySpecFiles)
        .map(file2moduleName)
        .map(importModules)
    );
})
.then(function() {
    __karma__.start();
}, function(error) {
    __karma__.error(error.stack || error);
});

// Filter spec files
function onlySpecFiles(path) {
  return /\.spec\.js$/.test(path);
}

// Normalize paths to module names.
function file2moduleName(filePath) {
  return filePath.replace(/\\/g, '/')
    .replace(/^\/base\//, '')
    .replace(/\.js/, '');
}

// Import module path
function importModules(path) {
    return System.import(path).then(executeSpec);
}

// Execute spec main method
function executeSpec(module) {
    if (module.hasOwnProperty('main')) {
        module.main();
    } else {
        throw new Error('Module ' + path + ' does not implement main() method.');
    }
}
