"use strict";

import gulp from "gulp";
import yargs from "yargs";
import gulpif from "gulp-if";

const argv = yargs.argv,
    prod = !!argv.prod,
    dev = !!argv.dev;

gulp.task("image", () => {
    return gulp.src('src/img/**/*')
        .pipe(gulpif(dev, gulp.dest('dist/assets/img')))
        .pipe(gulpif(prod, gulp.dest('build/assets/img')))
});
