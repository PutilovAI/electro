"use strict";

const gulp = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglifyjs = require('gulp-uglifyjs');
const imagemin = require('gulp-imagemin');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const prettify = require('gulp-html-prettify');
var browserSync  = require('browser-sync');

gulp.task('html', function() {
	return gulp.src('./src/templates/pages/*.*')
		.pipe(pug())
		.pipe(prettify({indent_size: 4}) )
		.pipe(gulp.dest('./dist'));
})

gulp.task('style', function() {
	return gulp.src('./src/assets/style/*.*')
		.pipe(stylus())
		.pipe(autoprefixer(
			['last 15 versions'], { cascade: true })
		)
		.pipe( gulp.dest('./dist/assets/css') )
		.pipe( browserSync.reload({stream: true}) ) ;
})

gulp.task('js', function() {
	return gulp.src([
			'./src/assets/libs/jquery/dist/jquery.min.js',
			'./src/blocks/**/*.js',
			'./src/assets/js/*.js'
		])
		.pipe( concat('main.js') )
		//.pipe( uglifyjs() )
		.pipe( gulp.dest('./dist/assets/js') );
})

gulp.task('fonts', function() {
	return gulp.src('./src/assets/fonts/**/*')
		.pipe(gulp.dest('./dist/assets/fonts'))
});

gulp.task('connect', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: './dist' // Директория для сервера - app
		},
		notify: false // Отключаем уведомления
	});
});

gulp.task('watch', function() {
	gulp.watch(['./src/assets/style/*.*', './src/blocks/**/*.styl'], ['style']);
	gulp.watch([
		'./src/blocks/**/*.pug',
		'./src/templates/**/*.pug'], browserSync.reload);
	gulp.watch([
			'./src/blocks/**/*.js',
			'./src/assets/js/*.js'], browserSync.reload);
});

gulp.task('default', ['style', 'js', 'html', 'fonts']);

gulp.task('dev', ['default', 'connect', 'watch']);
