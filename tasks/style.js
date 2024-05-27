"use strict";

import gulp from "gulp";
import plumber from "gulp-plumber";
import errorHandler from 'gulp-plumber-error-handler';
import sourcemaps from "gulp-sourcemaps";
import gulpIf from 'gulp-if';
import cached from 'gulp-cached';
import changed from 'gulp-changed';
import inheritance from 'gulp-sass-inheritance';
import filter from 'gulp-filter';
import sass from "gulp-sass";
import groupmedia from "gulp-group-css-media-queries";
import autoprefixer from "gulp-autoprefixer";
import mincss from "gulp-clean-css";
import rename from "gulp-rename";
import concat from 'gulp-concat';
import debug from "gulp-debug";
import yargs from "yargs";
import gulpif from "gulp-if";
// import browsersync from "browser-sync";

const argv = yargs.argv,
    prod = !!argv.prod,
    dev = !!argv.dev;

gulp.task('style', () => {
    return gulp.src([
        'src/scss/**/*.scss'
    ])
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: errorHandler(`Ошибка в \'Стилях\' task`)
        }))
        // .pipe(cached('sass'))
        // .pipe(changed('assets/css/', {
        //     extension: '.css'
        // }))
        // .pipe(gulpIf(global.isWatching, inheritance({
        //     dir: '/'
        // })))
        .pipe(filter(file => /scss/.test(file.path) ))
        .pipe(sass())
        .pipe(groupmedia())
        .pipe(autoprefixer({
            cascade: true,
            grid: false
        }))
        // .pipe(gulpIf(
        //     production,
        //     autoprefixer({
        //         cascade: true,
        //         grid: true
        //     })
        // ))
        /*.pipe(mincss({
            compatibility: "ie8", level: {
                1: {
                    specialComments: 0,
                    removeWhitespace: true,
                    semicolonAfterLastProperty: true
                },
                2: {
                    mergeAdjacentRules: true,
                    mergeMedia: true,
                    removeEmpty: true,
                    removeDuplicateFontRules: true,
                    removeDuplicateMediaBlocks: true,
                    removeDuplicateRules: true,
                    removeUnusedAtRules: false
                }
            }
        }))*/
        // .pipe(concat('styles.css'))
        .pipe(rename({
            dirname: '.',
            //suffix: ".min"
        }))
        .pipe(plumber.stop())
        .pipe(sourcemaps.write("./maps/"))
        // .pipe(debug({
        //     "title": "CSS files"
        // }))
        .pipe(gulpif(dev, gulp.dest('dist/assets/css')))
        .pipe(gulpif(prod, gulp.dest('build/assets/css')))
});
