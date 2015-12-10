module.exports = function () {
    var root = 'src/';
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

    var config = {
        root: root,
        index: index,
        assets: assets,
        build: build,
        assetPath: assetPath,
        tsFiles: tsFiles
    };

    return config;
};