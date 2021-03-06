/**
 * Created by Dirol on 04.01.2016.
 */
var gulp  = require('gulp'),
    watch = require('gulp-watch'),
    CONST = require('../_gulp/constants');



gulp.task('watch', function () {

    /*
        # Styles
    \* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
    gulp.task('sass:Change', ['sass'], function () {
        gulp.start('server:Reload')
    });

    // sass
    watch(CONST.SRC.sass)
        .on('add', function () {
            gulp.start('inject:Sass')
        })
        .on('unlink', function () {
            gulp.start('inject:Sass')
        })
        .on('change', function () {
            gulp.start('sass:Change')
        });

    watch(CONST.SRC.mainSass)
        .on('change', function () {
            gulp.start('sass:Change')
        });


    /*
        # Javascript
    \* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
    watch(CONST.SRC.js)
        .on('add', function () {
            gulp.start('inject:Js')
        })
        .on('unlink', function () {
            gulp.start('inject:Js')
        })
        .on('change', function () {
            gulp.start('server:Reload')
        });


    /*
        # Jade
    \* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
    gulp.watch(CONST.SRC.jade, function () {
        gulp.start('jade', [ 'server:Reload' ]);
    });
    /*
        # Html
    \* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
    //watch([CONST.SRC.indexHtml, CONST.PATH.components + '/**/*.html'], function () {
    //    gulp.start('server:Reload');
    //});

});


