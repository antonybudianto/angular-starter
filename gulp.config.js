module.exports = function () {
    var root = '';
    var app = root + 'app/';
    var index = root + 'index.html';
    var tsFiles = app + '**/*.ts';
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
            open: '/build',
            file: "index.html",
            wait: 1000
        }
    };

    var config = {
        root: root,
        app: app,
        index: index,
        build: build,
        assetPath: assetPath,
        tsFiles: tsFiles,
        liveServer: liveServer
    };

    return config;
};