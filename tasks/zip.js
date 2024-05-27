"use strict";

import gulp from "gulp";
import zip from 'gulp-zip';

gulp.task("zip", () => {
    return gulp.src('build/**/*')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('build'))
});
