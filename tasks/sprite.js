"use strict";

import gulp from "gulp";
import plumber from 'gulp-plumber';
import errorHandler from 'gulp-plumber-error-handler';
import spritesmith from 'gulp.spritesmith';
import buffer from 'vinyl-buffer';
import merge from 'merge-stream';
import yargs from "yargs";
import gulpif from "gulp-if";
// import browsersync from "browser-sync";

const argv = yargs.argv,
    prod = !!argv.prod,
    dev = !!argv.dev;

var spritesPaths = {
    icons: {
        images: 'src/img/icons/*.png',
        imgName: 'sprite.png',
        cssName: '_sprites.scss',
        imgPath: '../img/sprite.png',
        scss: 'scss/_helpers'
    }
}

gulp.task('sprite', function() {
    var spriteData = gulp.src(spritesPaths.icons.images).pipe(spritesmith({
        imgName: spritesPaths.icons.imgName,
        cssName: spritesPaths.icons.cssName,
        imgPath: spritesPaths.icons.imgPath,
        padding: 5,
    }));
    var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(gulpif(dev, gulp.dest('dist/assets/img')))
    .pipe(gulpif(prod, gulp.dest('build/assets/img')))
    var cssStream = spriteData.css
    .pipe(gulp.dest(spritesPaths.icons.scss))
    // .on("end", browsersync.reload);
    return merge(imgStream, cssStream);
});
