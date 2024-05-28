"use strict";

import gulp from "gulp";

const requireDir = require("require-dir");

requireDir("./tasks/");

export const development = gulp.series("clean-dev",
    gulp.parallel(["pug", "fonts", "sprite", "image", "style", "js"]),
    gulp.parallel("server"));

export const prod = gulp.series("clean-build", gulp.series(['pug', "fonts", "sprite", "image", "style", "js", "replace-url", "zip"]));

export default development;
