const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

function sassTask() {
	return gulp.src('./scss/*.scss') // any folder that has scss
		.pipe(sass().on('error', sass.logError)) // pass to sass compiler
		.pipe(gulp.dest('./css')) // destination
		.pipe(browserSync.stream()) // stream changes to browser
}

function jsTask() {
  return gulp.src('js/*.js'),
        uglify(),
        gulp.dest('dist');
}

function watch() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./scss/*.scss', sassTask); // reload all scsss file and call the function sassTask
	gulp.watch('./*.html').on('change', browserSync.reload); // reload the whole page 
	gulp.watch('js/*.js', jsTask) // reload all js file and call the function jsTask

}
 

// function watchTask() {
// 	gulp.watch(['./scss/*.scss','js/*.js'],
// 	gulp.parallel(sassTask,jsTask));
// }

exports.watch = watch;
exports.sassTask = sassTask;
exports.jsTask = jsTask;
// exports.default = gulp.series(
// 	gulp.parallel(sassTask,jsTask),
// 	watchTask
// );


