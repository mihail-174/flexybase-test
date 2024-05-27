"use strict";

import gulp from "gulp";
import replace from "gulp-replace";

gulp.task("replace-url", () => {
    return gulp.src('build/**/*')
        .pipe(replace('href="../../assets/', 'href="'))
        .pipe(replace('src="../../assets/', 'src="'))
        .pipe(gulp.dest('build'))
});
