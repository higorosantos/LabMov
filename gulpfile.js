const gulp = require('gulp');
const { series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch');

function SassToCss(){

    return  gulp.src(['./src/assets/scss/*.scss'])
        .pipe(sass({ outputStyle: 'compressed'}))
        .pipe(gulp.dest('./src/assets/css'))

}

function BootstrapCss(){

    return gulp.src('./node_modules/bootstrap/scss/*.scss')
           .pipe(sass({ outputStyle: 'compressed'}))
           .pipe(gulp.dest('./src/assets/css'))
}

function Watcher(){

    return watch(['./src/assets/scss/**/*.scss'], ()=> {
        SassToCss();
    })

}


module.exports.default = parallel(SassToCss,BootstrapCss,Watcher);