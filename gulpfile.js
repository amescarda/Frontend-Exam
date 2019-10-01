const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

const  file = {
	sassPath : './scss/*.scss',
	jsPath : './js/*.js',
}

function sassTask() {
	return gulp.src(sassPath) // any folder that has scss
		.pipe(sass().on('error', sass.logError)) // pass to sass compiler
		.pipe(gulp.dest('dist')) // destination
		.pipe(browserSync.stream()) // stream changes to browser
}

function jsTask() {
	return gulp.src(jsPath)
        .pipe(uglify())
		.pipe(dest('dist'))
}

// function watch() {
// 	browserSync.init({
// 		server: {
// 			baseDir: './'
// 		}
// 	});
// 	gulp.watch('./scss/*.scss', sassTask) // reload all scsss file and call the function sassTask
// 	gulp.watch('./*.html').on('change', browserSync.reload) // reload the whole page 
// 	gulp.watch('./js/*.js', jsTask) // reload all js file and call the function jsTask
// }
 

function watchTask() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch([sassPath,jsPath],
	gulp.parallel(sassTask,jsTask));
}

// exports.watch = watch;
// exports.sassTask = sassTask;
// exports.jsTask = jsTask;
exports.default = gulp.series(
	gulp.parallel(sassTask,jsTask),
	watchTask
)


