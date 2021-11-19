import gulp from "gulp";
import minify from "gulp-minify";

/*
 * Minify public/javascripts
 */

const sourceMinFunction = () => {

  return gulp.src("src/*.js", { allowEmpty: true })
    .pipe(minify({ noSource: true, ext: { min: ".js" } }))
    .pipe(gulp.dest("dist"));
};


gulp.task("src-min", sourceMinFunction);

/*
 * Watch
 */

const watchFunction = () => {
  gulp.watch("src/*.js", sourceMinFunction);
};

gulp.task("watch", watchFunction);

/*
 * Initialize default
 */

gulp.task("default", () => {
  sourceMinFunction();
  watchFunction();
});
