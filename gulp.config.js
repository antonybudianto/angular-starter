module.exports = function () {
    var root = '';
    var app = root + 'app/';
    var assets = root + 'assets/';
    var index = app + 'index.html';
    var tsFiles = app + '**/*.ts';
    var build = {
        path: 'build/',
        assets: {
            lib: {
                js: 'lib.js',
                css: 'lib.css'
            }
        }
    };
    var assetPath = {
        lib: {
            css: assets + build.assets.lib.css,
            js: assets + build.assets.lib.js
        },
        fonts: assets + 'fonts'
    };
    var liveServer = {
        port: 8181,
        host: "127.0.0.1",
        open: '/',
        file: "index.html",
        wait: 1000
    };


    var config = {
        root: root,
        app: app,
        index: index,
        assets: assets,
        build: build,
        assetPath: assetPath,
        tsFiles: tsFiles,
        liveServer: liveServer
    };

    return config;
};