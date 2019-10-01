var gulp = require('gulp')
var sass = require('gulp-sass')
var uglify = require('gulp-uglify');
sass.compiler = require('node-sass')

function sass() {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}
 
function js(){
  return gulp.src('js/*.js'),
        uglify(),
        gulp.dest('dist')
}

function watch() {
	gulp.watch(['./scss/*.scss','js/*.js'],
	gulp.parallel(sass,js))
}

exports.default = gulp.series(gulp.parallel(js,sass),watch) 


