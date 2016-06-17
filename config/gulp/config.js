var envConfig = require('./env');

module.exports = function () {
    var root = '',
        src = root + 'src/',
        app = src + 'app/',
        test = src + 'test/',
        tmp = src + 'tmp/',
        tmpApp = tmp + 'app/',
        tmpTest = tmp + 'test/',
        testHelper = test + 'test-helpers/',
        e2e = test + 'e2e/',
        tmpE2E = tmpTest + 'e2e/',
        assets = src + 'assets/',
        assetsPath = {
            styles: assets + 'styles/',
            images: assets + 'images/',
            fonts: assets + 'fonts/'
        },
        index = src + 'index.html',
        tsFiles = [
            app + '**/!(*.spec)+(.ts)'
        ],
        tsTestFiles = {
            unit: [app + '**/*.spec.ts'],
            e2e: [e2e + '**/*.ts'],
            helper: [testHelper + '**/*.ts']
        },
        build = {
            path: 'build/',
            app: 'build/app/',
            fonts: 'build/fonts',
            assetPath: 'build/assets/',
            assets: {
                lib: {
                    js: 'lib.js',
                    css: 'lib.css'
                }
            }
        },
        report = {
            path: 'report/'
        };

    var e2eConfig = {
        seleniumTarget: 'http://127.0.0.1:3000'
    };

    var systemJs = {
        builder: {
            normalize: true,
            minify: true,
            mangle: true,
            runtime: false,
            globalDefs: { DEBUG: false, ENV: 'production' }
        }
    };

    var config = {
        root: root,
        src: src,
        app: app,
        test: test,
        tmp: tmp,
        tmpApp: tmpApp,
        tmpTest: tmpTest,
        tmpE2E: tmpE2E,
        testHelper: testHelper,
        e2e: e2e,
        e2eConfig: e2eConfig,
        assets: assets,
        index: index,
        build: build,
        report: report,
        assetsPath: assetsPath,
        tsFiles: tsFiles,
        tsTestFiles: tsTestFiles,
        systemJs: systemJs
    };

    if (envConfig.ENV === envConfig.ENVS.DEV)
    {
        var historyApiFallback = require('connect-history-api-fallback');
        var browserSync = {
            dev: {
                port: 3000,
                server: {
                    baseDir: './src/',
                    middleware: [historyApiFallback()],
                    routes: {
                        "/node_modules": "node_modules",
                        "/src": "src"
                    }
                },
                files: [
                    src + "index.html",
                    src + "systemjs.conf.js",
                    assetsPath.styles + "main.css",
                    tmpApp + "**/*.js",
                    app + "**/*.css",
                    app + "**/*.html"
                ]
            },
            prod: {
                port: 3001,
                server: {
                    baseDir: './' + build.path,
                    middleware: [historyApiFallback()]
                }
            }
        };

        config.browserSync = browserSync;
    }

    return config;
};
