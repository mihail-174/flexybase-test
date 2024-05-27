import gulp from "gulp";
import include from "gulp-include";
import babel from "gulp-babel";
import plumber from "gulp-plumber";
import errorHandler from "gulp-plumber-error-handler";
import cached from "gulp-cached";
import changed from "gulp-changed";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import debug from "gulp-debug";
import sourcemaps from "gulp-sourcemaps";
import yargs from "yargs";
import gulpif from "gulp-if";

const argv = yargs.argv,
    prod = !!argv.prod,
    dev = !!argv.dev;

gulp.task("js", () => {
    return gulp.src(["src/js/theme.js", "src/js/vendor/*"])
        // .pipe(plumber({
        //     errorHandler: errorHandler("Ошибка в \'JS\' task")
        // }))
        // .pipe(sourcemaps.init())
        .pipe(include())
        // .pipe(babel({
        //     presets: [
        //         [
        //             "@babel/preset-env",
        //             {
        //                 modules: false
        //             }
        //         ]
        //     ]
        // }))
        // .pipe(uglify())
        .on('error', console.log)
        // .pipe(sourcemaps.write("./maps/"))
        .pipe(gulpif(dev, gulp.dest('dist/assets/js')))
        .pipe(gulpif(prod, gulp.dest('build/assets/js')))
});

// gulp.task("js", () => {
//     return gulp.src(["src/js/**/*"])
//         .pipe(plumber({
//             errorHandler: errorHandler("Ошибка в \'JS\' task")
//         }))
//         // .pipe(cached("js"))
//         // .pipe(changed("src/assets/js/", {
//         //     extension: ".js"
//         // }))
//         .pipe(sourcemaps.init())
//         .pipe(babel({
//             presets: [
//                 [
//                     "@babel/preset-env",
//                     {
//                         modules: false
//                     }
//                 ]
//             ]
//         }))
//         // .pipe(uglify())
//         .pipe(rename({
//             dirname: ".",
//             //suffix: ".min",
//         }))
//         .pipe(sourcemaps.write("./maps/"))
//         // .pipe(debug({
//         //     "title": "JS files"
//         // }));
//         .pipe(gulpif(dev, gulp.dest('dist/assets/js')))
//         .pipe(gulpif(prod, gulp.dest('build/assets/js')))
// });