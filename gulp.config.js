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
        fonts: build.assetPath + 'fonts'
    };
    var liveServer = {
        port: 8181,
        host: "127.0.0.1",
        open: '/',
        file: "index.html",
        wait: 1000
    };
    var liveServerBuild = {
        port: 8282,
        host: "127.0.0.1",
        open: '/build',
        file: "index.html",
        wait: 1000
    };


    var config = {
        root: root,
        app: app,
        index: index,
        build: build,
        assetPath: assetPath,
        tsFiles: tsFiles,
        liveServer: liveServer,
        liveServerBuild: liveServerBuild
    };

    return config;
};