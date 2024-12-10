import gulp from 'gulp'
import replace from 'gulp-replace'

/*
 * Minify public/javascripts
 */

function sourceMinFunction(): NodeJS.ReadWriteStream {
  return gulp
    .src('src/*.js', { allowEmpty: true })
    .pipe(replace('export {};', ''))
    .pipe(gulp.dest('dist'))
}

gulp.task('source-min', sourceMinFunction)

/*
 * Watch
 */

function watchFunction(): void {
  gulp.watch('src/*.js', sourceMinFunction)
}

gulp.task('watch', watchFunction)

/*
 * Initialize default
 */

gulp.task('default', () => {
  sourceMinFunction()
  watchFunction()
})
