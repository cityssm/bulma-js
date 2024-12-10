import gulp from 'gulp';
import replace from 'gulp-replace';
/*
 * Remove "export" from src Javascript
 */
function sourceCleanFunction() {
    return gulp
        .src('src/*.js', { allowEmpty: true })
        .pipe(replace('export {};', ''))
        .pipe(gulp.dest('dist'));
}
gulp.task('source-clean', sourceCleanFunction);
/*
 * Watch
 */
function watchFunction() {
    gulp.watch('src/*.js', sourceCleanFunction);
}
gulp.task('watch', watchFunction);
/*
 * Initialize default
 */
gulp.task('default', () => {
    sourceCleanFunction();
    watchFunction();
});
