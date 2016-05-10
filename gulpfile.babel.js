import gulp     from 'gulp';
import sass     from 'gulp-sass';
import rename   from 'gulp-rename';

gulp.task('sass', () => {
  return gulp.src('src/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', () => {
    gulp.watch('src/*.scss', ['sass']);
});

gulp.task('default', ['sass','watch']);