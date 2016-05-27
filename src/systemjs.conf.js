/*
 * This config is only used during development and build phase only
 * It will not be available on production
 *
 */

(function(global) {
    // ENV
    global.ENV = global.ENV || 'development';

    // wildcard paths
    var paths = {
        'n:*': 'node_modules/*'
    };

    // map tells the System loader where to look for things
    var map = {
        'app': 'tmp/app',
        'test': 'tmp/test',
        'rxjs': 'n:rxjs',
        '@angular': 'n:@angular',
        'lodash': 'n:lodash'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'src/tmp/app': {
            defaultExtension: 'js'
        },
        'app': {
            defaultExtension: 'js'
        },
        'test': {
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        }
    };

    // Add package entries for angular packages
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router'
    ];

    // add package entries for packages that expose barrels using index.js
    var packageNames = [
        'lodash'
    ];

    ngPackageNames.forEach(function(pkgName) {
        var main = global.ENV === 'testing' ? 'index.js' :
            pkgName + '.umd.js';

        packages['@angular/'+pkgName] = { main: main, defaultExtension: 'js' };
    });

    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages,
        paths: paths
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);
