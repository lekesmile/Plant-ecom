var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('scss/main.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('css/'));
});

gulp.task('sass:watch', function() {
  gulp.watch('scss/**/*', gulp.series('sass'));
});

