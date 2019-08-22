const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();


const scriptsFiles = [ 
    './src/js/main.js',
    './src/js/productCounter.js',
    './src/js/loginModal.js',
    './src/js/prodImgSlider.js',
    './src/js/quantityButts.js'
]

function sassCompile () {
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./src/css/'))
    .pipe(browserSync.stream());
}
function scripts () {
    return gulp.src(scriptsFiles)
    .pipe(concat("app.js"))
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    
    gulp.watch('./src/js/**/*.js', scripts)
    gulp.watch('./src/scss/**/*.scss',sassCompile)
    gulp.watch("./pages/product-detailed-page.html").on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('scripts', scripts);
gulp.task('sass-compile',sassCompile);
gulp.task('watch',watch);

