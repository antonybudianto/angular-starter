module.exports = function () {
    var root = '';
    var app = root + 'app/';
    var test = 'test/';
    var testHelper = test + 'test-helpers/';
    var e2e = test + 'e2e/';
    var assets = root + 'assets/';
    var assetsPath = {
        styles: assets + 'styles/',
        images: assets + 'images/',
        fonts: assets + 'fonts/'
    };
    var index = root + 'index.html';
    var tsFiles = [
        app + '**/!(*.spec)+(.ts)'
    ];
    var tsTestFiles = {
        unit: app + '**/*.spec.ts',
        e2e: e2e + '**/*.spec.ts',
        helper: testHelper + '**/*.ts'
    };
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
        test: test,
        testHelper: testHelper,
        e2e: e2e,
        assets: assets,
        index: index,
        build: build,
        report: report,
        assetsPath: assetsPath,
        buildPath: buildPath,
        tsFiles: tsFiles,
        tsTestFiles: tsTestFiles,
        liveServer: liveServer,
        systemjsBuild: systemjsBuild
    };

    return config;
};