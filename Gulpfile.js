var gulp = require('gulp'),
	uglify = require('gulp-uglifyjs');

gulp.task('mini', function() {
  return gulp.src('loadingbar.js')
    .pipe(uglify('loadingbar.min.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['mini']);