module.exports = function () {
    var root = '';
    var app = root + 'app/';
    var testHelper = root + 'test-helpers/';
    var index = root + 'index.html';
    var tsFiles = [
        app + '**/!(*.spec)+(.ts)'
    ];
    var tsSpecFiles = [
        app + '**/*.spec.ts',
        testHelper + '**/*.ts'
    ];
    var build = {
        path: 'build/',
        assetPath: 'build/assets/',
        assets: {
            lib: {
                js: 'lib.js',
                css: 'lib.css'
            }
        }
    };
    var report = {
        path: 'report/'
    };
    var assetPath = {
        lib: {
            css: build.assetPath + build.assets.lib.css,
            js: build.assetPath + build.assets.lib.js
        },
        fonts: build.path + 'fonts'
    };
    var liveServer = {
        dev: {
            port: 3000,
            host: "127.0.0.1",
            open: '/',
            file: "index.html",
            wait: 1000
        },
        prod: {
            port: 3001,
            host: "127.0.0.1",
            root: 'build/',
            file: "index.html",
            wait: 1000
        }
    };

    var systemjsBuild = {
        map: {
            'angular2': 'node_modules/angular2',
            'rxjs': 'node_modules/rxjs'
        },
        packages: {
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
    };

    var config = {
        root: root,
        app: app,
        testHelper: testHelper,
        index: index,
        build: build,
        report: report,
        assetPath: assetPath,
        tsFiles: tsFiles,
        tsSpecFiles: tsSpecFiles,
        liveServer: liveServer,
        systemjsBuild: systemjsBuild
    };

    return config;
};