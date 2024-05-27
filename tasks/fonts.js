"use strict";

import gulp from "gulp";
import yargs from "yargs";
import gulpif from "gulp-if";
// import debug from "gulp-debug";

const argv = yargs.argv,
    prod = !!argv.prod,
    dev = !!argv.dev;

gulp.task("fonts", () => {
    return gulp.src('src/fonts/**/*')
        // .pipe(debug({
        //     "title": "Fonts"
        // }));
        .pipe(gulpif(dev, gulp.dest('dist/assets/fonts')))
        .pipe(gulpif(prod, gulp.dest('build/assets/fonts')))
});
