module.exports = function () {
    var root = '';
    var app = root + 'app/';
    var testHelper = root + 'test-helpers/';
    var assets = root + 'assets/';
    var assetsPath = {
        styles: assets + 'styles/',
        images: assets + 'images/'
    };
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
        app: 'build/app/',
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
    var buildPath = {
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
        assets: assets,
        index: index,
        build: build,
        report: report,
        assetsPath: assetsPath,
        buildPath: buildPath,
        tsFiles: tsFiles,
        tsSpecFiles: tsSpecFiles,
        liveServer: liveServer,
        systemjsBuild: systemjsBuild
    };

    return config;
};