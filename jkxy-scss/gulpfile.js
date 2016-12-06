/**
 * 组件安装
 * npm install gulp-util gulp-compass gulp-imagemin gulp-minify-css gulp-uglify gulp-jshint gulp-clean gulp-livereload tiny-lr gulp-htmlmin --save-dev
 */


// 引入 gulp及组件
var gulp = require('gulp'), //基础库
	compass = require('gulp-compass'), //编译sass
	imagemin = require('gulp-imagemin'), //图片压缩
	minifycss = require('gulp-minify-css'), //css压缩
	htmlmin = require('gulp-htmlmin'), //压缩html
	uglify = require('gulp-uglify'), //js压缩
	jshint = require('gulp-jshint'), //js检查
	clean = require('gulp-clean'), //清空文件夹
	tinylr = require('tiny-lr'), //livereload
	server = tinylr(),
	port = 35729,
	livereload = require('gulp-livereload'); //livereload

// HTML处理(gulp html 成功)
//压缩html
gulp.task('html', function() {
	var htmlSrc = './src/*.html',
		htmlDst = './dist/';
	gulp.src(htmlSrc)
		.pipe(htmlmin({
			removeComments: true, //清除HTML注释
			collapseWhitespace: true, //压缩HTML
			collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
			removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
			removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
			removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
			minifyJS: true, //压缩页面JS
			minifyCSS: true //压缩页面CSS
		}))
		.pipe(gulp.dest(htmlDst));
});

gulp.task('css', function() { //编译CSS//压缩CSS
	gulp.src('./src/sass/*.scss')
		//编译sass
		.pipe(compass({
			config_file: './config.rb',
			css: './dist/css/',
			sass: './src/sass/'
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('./dist/css')) //输出到文件夹
});

// 图片处理（gulp images 成功）
gulp.task('img', function() {
	var imgSrc = './src/img/**/**/*',
		imgDst = './dist/img';
	gulp.src(imgSrc)
		.pipe(imagemin())
		.pipe(livereload(server))
		.pipe(gulp.dest(imgDst));
})

// js处理（gulp js 成功）
gulp.task('js', function() {
	var jsSrc = './src/js/*.js',
		jsDst = './dist/js';

	gulp.src(jsSrc)
		.pipe(jshint.reporter('default'))
		.pipe(gulp.dest(jsDst))
		.pipe(uglify())
		.pipe(livereload(server))
		.pipe(gulp.dest(jsDst));
});

// 清空图片、样式、js
gulp.task('clean', function() {
	gulp.src(['./dist/css', './dist/js', './distg/img'], {
			read: false
		})
		.pipe(clean());
});

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['clean'], function() {
	gulp.start('html', 'css', 'img', 'js');
});


// 监听任务 运行语句 gulp watch
gulp.task('watch', function() {

	server.listen(port, function(err) {
		if (err) {
			return console.log(err);
		}

		// 监听html
		gulp.watch('./src/*.html', function(event) {
			gulp.run('html');
		})

		// 监听css
		gulp.watch('./src/scss/*.scss', function() {
			gulp.run('css');
		});

		// 监听images
		gulp.watch('./src/img/**/*', function() {
			gulp.run('img');
		});

		// 监听js
		gulp.watch('./src/js/*.js', function() {
			gulp.run('js');
		});

	});
});