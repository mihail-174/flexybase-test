"use strict";

import gulp from "gulp";
import browsersync from "browser-sync";

gulp.task("server", () => {
    browsersync.init({
        server: "./dist/",
        port: 3000,
        notify: false,
        open: false
    });
    global.isWatching = true;
    gulp.watch('src/img/**/*.*', gulp.parallel("image"));
    gulp.watch('src/scss/**/*.scss', gulp.parallel("style"));
    gulp.watch('src/template/**/*.pug', gulp.parallel("pug"));
    gulp.watch('src/js/**/*.js', gulp.parallel("js"));
});
