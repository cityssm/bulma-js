import gulp from 'gulp'
import replace from 'gulp-replace'
import minify from 'gulp-minify'
const sourceMinFunction = () => {
  return gulp
    .src('src/*.js', { allowEmpty: true })
    .pipe(replace('export {};', ''))
    .pipe(minify({ noSource: true, ext: { min: '.js' } }))
    .pipe(gulp.dest('dist'))
}
gulp.task('source-min', sourceMinFunction)
const watchFunction = () => {
  gulp.watch('src/*.js', sourceMinFunction)
}
gulp.task('watch', watchFunction)
gulp.task('default', () => {
  sourceMinFunction()
  watchFunction()
})
