import gulp from 'gulp'
import replace from 'gulp-replace'

/*
 * Remove "export" from src Javascript
 */

function sourceCleanFunction(): NodeJS.ReadWriteStream {
  return gulp
    .src('src/*.js', { allowEmpty: true })
    .pipe(replace('export {};', ''))
    .pipe(gulp.dest('dist'))
}

gulp.task('source-clean', sourceCleanFunction)

/*
 * Watch
 */

function watchFunction(): void {
  gulp.watch('src/*.js', sourceCleanFunction)
}

gulp.task('watch', watchFunction)

/*
 * Initialize default
 */

gulp.task('default', () => {
  sourceCleanFunction()
  watchFunction()
})
