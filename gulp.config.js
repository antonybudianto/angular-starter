module.exports = function () {
    var root = 'src/';
    var app = root + 'app/';
    var index = root + 'index.html';
    var assets = root + 'assets/';
    var tsFiles = root + '**/*.ts';
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
        open: '/src',
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