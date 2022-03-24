const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const path = require('path');
const rename = require('gulp-rename');
const cleancss = require('gulp-clean-css')


// TODO: handle sub-directories (like restaurant-menu has)
function styles() {
    return src('src/blocks/**/style.scss')
        .pipe(sass())
        .pipe(cleancss())
        .pipe(rename(function(file){
            file.basename = file.dirname.replace('/', '_');
            file.extname = '.style.build.css';
            file.dirname = '';
        }))
        .pipe(dest('dist/blocks'));
}

exports.styles = styles;