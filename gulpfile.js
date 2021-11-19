"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = __importDefault(require("gulp"));
const gulp_minify_1 = __importDefault(require("gulp-minify"));
const sourceMinFunction = () => {
    return gulp_1.default.src("src/*.js", { allowEmpty: true })
        .pipe((0, gulp_minify_1.default)({ noSource: true, ext: { min: ".js" } }))
        .pipe(gulp_1.default.dest("dist"));
};
gulp_1.default.task("src-min", sourceMinFunction);
const watchFunction = () => {
    gulp_1.default.watch("src/*.js", sourceMinFunction);
};
gulp_1.default.task("watch", watchFunction);
gulp_1.default.task("default", () => {
    sourceMinFunction();
    watchFunction();
});
