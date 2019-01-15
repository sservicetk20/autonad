var rutaCSS = 'css/'; // ruta del CSS final
var rutaJS = 'js/'; // ruta del archivo JS final
var rutaIMG = 'img/'; //carpeta donde compila las imágenes
var nameJS = 'mainscript.js'; //nombre final de los archivos concatenados

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// gulp.task('images', function(){
//   gulp.src('sources/images/*')
//     .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
//     .pipe(gulp.dest(rutaIMG));
// });
gulp.task('images', () =>
    gulp.src('sources/images/*/*')
        .pipe(imagemin())
        .pipe(gulp.dest(rutaIMG))
);

gulp.task('styles', function(){
  gulp.src(['sources/sass/main.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    // .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(rutaCSS))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss({keepSpecialComments: 1, processImport: false}))
    .pipe(gulp.dest(rutaCSS))
});

gulp.task('scripts', function(){
  return gulp.src([
    'node_modules/scrollreveal/dist/scrollreveal.min.js',
    'node_modules/rellax/rellax.min.js',
    'sources/js/libraries/kolorWheel.js',
    'sources/js/libraries/owl.carousel.min.js',
    'sources/js/utilidades.js',
    'sources/js/front.js',
    'sources/js/script.js',
    ])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat(nameJS))
    .pipe(gulp.dest(rutaJS))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(rutaJS))
}); 

gulp.task('watch', function() {
  //gulp.watch('jade/*.jade',['templates']);
  //gulp.watch('jade/includes/*.jade',['templates']);
  // ↓↓↓ Sass watch
  gulp.watch('sources/sass/**/*.scss', ['styles']);
  gulp.watch('sources/js/*.js', ['scripts']);
  // gulp.watch('sources/images/*/*', ['images']);
  //gulp.watch('js/*.js', ['compress']);
  // ↑↑↑ Sass watch
});

//gulp.task('default', function(){
//  gulp.watch("sources/sass/**/*.scss", ['styles']);
//  gulp.watch("sources/js/**/*.js", ['scripts']);
//});

// tareas default
gulp.task('default', ['styles' , 'scripts' , 'watch']);

//gulp.task('default', ['styles' , 'watch']);
