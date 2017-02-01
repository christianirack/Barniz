
const gulp = require('gulp'), 
sass = require('gulp-sass'), 
autoprefixer = require('gulp-autoprefixer'), 
concat = require('gulp-concat'), 
minify = require('gulp-minify'),
concatCss = require('gulp-concat-css'),
cssmin = require('gulp-cssmin'),
cssToJs = require('gulp-css-to-js'),
run = require('gulp-run');
/*
Estructura 
----------------------------
./public/css/
./public/js
./public/images
---------------------------
./application/src/js
./application/src/scss

*/
const scss = './application/src/scss/';

const sjss = './application/src/js/';

const public = './public/';
// en public
var cssFiles = ['swiper.css',
                'gFonts.css',
                'foundation.css',
                'app.css'];
// en application/src
var jsFiles = ['vendor/jquery.js',
                'vendor/what-input.js',
                'vendor/foundation.js',
                'swiper.js',
                'vivus.min.js',
                'TweenMax.js',
                'ScrollMagic.js',
                'plugins/debug.addIndicators.js',
                'plugins/animation.gsap.js',
                'plugins/DrawSVGPlugin.min.js',
                'app.js'];

/*----------  Incluir scripts  ----------*/
var css = [];
for(var i in cssFiles){
  css.push(public+'css/'+cssFiles[i]);
}
var js = [];
for(var i in jsFiles){
  js.push(sjss+jsFiles[i]);
}
/*----------  Errores al compilar  ----------*/
function handleError(err){
   // var cmd1 = new run.Command('clear');
   // cmd1.exec();
   var cmd = new run.Command("terminal-notifier -title 'Error' -message 'Revisar código!'");
    cmd.exec();
    console.log(err.toString());
    this.emit('end');
}
/*----------  Compilar SASS  ----------*/

gulp.task('sass', ()=>
	gulp.src(scss+'/app.scss').on('error', handleError)
	.pipe(sass({ outputStyle:'expended'})).on('error', handleError)
	.pipe(autoprefixer({versions:['last 5 browsers']})).on('error', handleError)
	.pipe(gulp.dest(public+'css/'))
    
);
/*----------  Concatenar CSS  ----------*/
gulp.task('concatcss',['sass'], ()=>
    gulp.src(css).on('error', handleError)
    .pipe(concatCss('bundle.css')).on('error', handleError)
   //.pipe(cssmin()).on('error', handleError)
    .pipe(gulp.dest(public+'css/'))
    /////////


    
);
/*----------  Concatenar JS  ----------*/
gulp.task('js', ()=>{
    gulp.src(js)
    .pipe(concat('bundle.js')).on('error', handleError)
    .pipe(gulp.dest(public+'js/'))
    /////////
});

/*----------  Concatenar JS  ----------*/




/*----------  Vigilar JS, CSS Y SASS  ----------*/
gulp.task('watch', () => {
	gulp.watch([public+'css/**/*.css',scss+'**/*.scss'],['concatcss']);
  gulp.watch(sjss+'**/*.js',['js']);
  //gulp.watch([public+'css/bundle.css',public+'js/bundle.js'],['bundleAll']);
});
gulp.task('default', ['concatcss','js','watch']);
