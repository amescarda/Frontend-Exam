const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const mainBowerFiles = require('main-bower-files');
const browserSync = require('browser-sync').create();

const  file = {
	sassPath : './scss/*.scss',
	jsPath : './js/*.js',
	htmlPath : './*.html',
}

function sassTask() {
	return gulp.src(file.sassPath) // any folder that has scss
		.pipe(sass().on('error', sass.logError)) // pass to sass compiler
		.pipe(gulp.dest('dist')) // destination
		.pipe(browserSync.stream()) // stream changes to browser
}

function jsTask() {
	return gulp.src(file.jsPath)
        .pipe(uglify())
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream()) // stream changes to browser
}

// function bowerTask() {
// 	return gulp.src(mainBowerFiles() , { base: '/bower_components/'  })
//         .pipe(uglify())
// 		.pipe(gulp.dest('dist'))
// 		.pipe(browserSync.stream()) // stream changes to browser
// }

function watch() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch(file.sassPath, sassTask) // reload all scsss file and call the function sassTask
	gulp.watch(file.htmlPath).on('change', browserSync.reload) // reload the whole page 
	gulp.watch(file.jsPath, jsTask) // reload all js file and call the function jsTask
}
 
exports.default = gulp.series(
	gulp.parallel(sassTask,jsTask),
	watch
)


