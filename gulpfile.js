var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var inject = require('gulp-inject');
var ts = require('gulp-typescript');
var liveServer = require('live-server');
var config = require('./gulp.config')();
var del = require('del');
var Builder = require('systemjs-builder');

/* Initialize TS Project */
var tsProject = ts.createProject(config.root + 'tsconfig.json');

/* Default task */
gulp.task('default', ['serve-dev']);

/* Start live server */
gulp.task('serve-dev', ['wiredep', 'compile-ts', 'watch-ts'], function () {  
    liveServer.start(config.liveServer);
});

/* Watch changed typescripts file and compile it */
gulp.task('watch-ts', function () {
    return gulp.watch(config.tsFiles, function (file) {
        console.log('Compiling ' + file.path + '...');
        return tsProject.src(file.path)
            .pipe(ts(tsProject))
            .pipe(gulp.dest(config.root));
    });
});

/* Compile all typescripts */
gulp.task('compile-ts', ['clean-compile'], function () {
    return tsProject.src(config.tsFiles)
        .pipe(ts(tsProject))
        .pipe(gulp.dest(config.root));
});

/* Wiredep the bower main files to index file */
gulp.task('wiredep', function () {
    return gulp.src(config.index)
        .pipe(inject(
            gulp.src([], {read:false}), {empty: true}
        ))
        .pipe(inject(gulp.src(mainBowerFiles(), {
            read: false
        }), {
            name: 'bower'
        }))
        .pipe(gulp.dest(config.root));
});

gulp.task('serve-build', ['build-sjs'], function () {
    liveServer.start(config.liveServerBuild);
});

gulp.task('build-sjs', ['build-assets', 'build-polyfills'], function () {
    var builder = new Builder('.');
    builder.config({
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
    });
    builder.loader.defaultJSExtensions = true;
    builder
        .bundle('app/boot', 'build/app/boot.js', {
            minify: true
        })
        .then(function () {
            console.log('build complete');
        })
        .catch(function (ex) {
            console.log('error', ex);
        });

    
    gulp.src('app/**/*.html', { base: 'app' })
        .pipe(gulp.dest(config.build.path + 'app'));
});

gulp.task('build-polyfills', function () {
    return gulp.src([
        'node_modules/angular2/bundles/angular2.min.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/rxjs/bundles/Rx.js'
        ], {
            base: 'node_modules'
        })
        .pipe(gulp.dest(config.build.path + 'node_modules'));
});

/* Concat and minify/uglify all css, js, and copy fonts */
gulp.task('build-assets', ['clean', 'styles', 'scripts', 'fonts', 'compile-ts'], function () {
    return gulp.src(config.index)
        .pipe(inject(
            gulp.src([], {read:false}), {name: 'bower', empty: true}
        ))
        .pipe(inject(
            gulp.src([], {read:false}), {name: 'rmproduction', empty: true}
        ))
        .pipe(inject(
            gulp.src([
                config.build.assets.lib.css,
                config.build.assets.lib.js
            ],
            {
                read: false,
                cwd: config.build.assetPath
            }),
            {
                ignorePath: config.build.path,
                relative: true
            }
        ))
        .pipe(gulp.dest(config.build.path));
});

/* Minify all bower css */
gulp.task('styles', function () {
    return gulp.src(mainBowerFiles({
        filter: '**/*.css'
    }))
    .pipe(concat(config.build.assets.lib.css))
    .pipe(minifyCss())
    .pipe(gulp.dest(config.build.assetPath));
});

/* Copy fonts in bower */
gulp.task('fonts', function () {
    return gulp.src(mainBowerFiles({
        filter: '**/fonts/*.*'
    }))
    .pipe(gulp.dest(config.assetPath.fonts));
});

/* Uglify all bower js */
gulp.task('scripts', function () {
    var bowerFiles = mainBowerFiles({
        filter: '**/*.js'
    });
    var nodeFiles = [
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/angular2/bundles/angular2-polyfills.js'
    ];
    return gulp.src(bowerFiles.concat(nodeFiles))
        .pipe(concat(config.build.assets.lib.js))
        .pipe(uglify())
        .pipe(gulp.dest(config.build.assetPath));
});

/* Clean build folder */
gulp.task('clean', function () {
    del([config.build.path]);
});

/* Clean js and map */
gulp.task('clean-compile', function () {
    del([config.app + '**/*.js', config.app + '**/*.js.map']);
});