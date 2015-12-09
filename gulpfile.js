var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var inject = require('gulp-inject');
 
gulp.task('wiredep', function () {
	return gulp.src('src/index.html')
		.pipe(wiredep({
		}))
		.pipe(gulp.dest('src/'));
});

gulp.task('build', ['styles', 'scripts'], function () {
	return gulp.src('src/index.html')
		.pipe(inject(
			gulp.src([
				'build/assets/lib.css',
				'build/assets/lib.js'
			],
			{
				read: false
			})
		))
		.pipe(gulp.dest('src/'));
});

gulp.task('styles', function () {
	return gulp.src(mainBowerFiles({
		filter: '**/*.css'
	}))
	.pipe(concat('lib.css'))
	.pipe(minifyCss())
	.pipe(gulp.dest('build/assets'));
});

gulp.task('scripts', function () {
	return gulp.src(mainBowerFiles({
		filter: '**/*.js'
	}))
	.pipe(concat('lib.js'))
	.pipe(uglify())
	.pipe(gulp.dest('build/assets'));
});