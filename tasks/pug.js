"use strict";

import gulp from "gulp";
import plumber from "gulp-plumber";
import errorHandler from 'gulp-plumber-error-handler';
import gulpif from 'gulp-if';
// import cached from 'gulp-cached';
// import changed from 'gulp-changed';
import pugInheritance from 'gulp-pug-inheritance';
import filter from 'gulp-filter';
import pug from 'gulp-pug';
import debug from "gulp-debug";
import rename from 'gulp-rename';
import yargs from "yargs";

const argv = yargs.argv,
    prod = !!argv.prod,
    dev = !!argv.dev;

gulp.task('pug', () => {
    return gulp.src('src/template/**/*.pug')
        .pipe(plumber({
            errorHandler: errorHandler(`Ошибка в \'Pug\' task`)
        }))
        // .pipe(changed('dist', {
        //     extension: '.html',
        //     // hasChanged: changed.compareLastModifiedTime
        // }))
        // .pipe(cached('pug'))
        // .pipe(debug({title: 'debug-before'}))
        .pipe(pugInheritance({
            basedir: 'src/template',
            skip: 'node_modules',
        }))
        .pipe(filter(function (file) {
            // return /src[\\\/]template/.test(file.path) && !/src[\\\/]template[\\\/]components/.test(file.path);
            return /src[\\\/]template/.test(file.path) && !/src[\\\/]template[\\\/]components/.test(file.path)  && !/src[\\\/]template[\\\/]layout/.test(file.path) && !/src[\\\/]template[\\\/]helpers/.test(file.path);
            // return /src[\\\/]template/.test(file.path) && !/src[\\\/]template[\\\/]layout[\\\/]default[\.]jade/.test(file.path) && !/src[\\\/]template[\\\/]helpers/.test(file.path);
            // return !/\/_/.test(file.path) && !/^_/.test(file.relative);
            // return !/\/_/.test(file.path) && !/^_/.test(file.relative);
        }))
        .pipe(
            pug({
                // basedir: 'src/template',
                pretty: true
            })
        )
        .pipe(plumber.stop())
        // .pipe(debug({title: 'debug-after'}))
        // .pipe(debug({
        //     "title": "templates files"
        // }))
        .pipe(rename({
            dirname: '.'
        }))
        .pipe(gulpif(dev, gulp.dest('dist')))
        .pipe(gulpif(prod, gulp.dest('build')))
});
