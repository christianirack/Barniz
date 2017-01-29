
const gulp = require('gulp'), 
sass = require('gulp-sass'), 
autoprefixer = require('gulp-autoprefixer'), 
concat = require('gulp-concat'), 
minify = require('gulp-minify'),
concatCss = require('gulp-concat-css'),
cssmin = require('gulp-cssmin'),
run = require('gulp-run');
////////////////////////////////////
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
////////////////////////////////////
const scss = './application/src/scss/';

const sjss = './application/src/js/';

const public = './public/';
// en public
var cssFiles = ['swiper.css','foundation.css','app.css'];
// en application/src
var jsFiles = ['vendor/jquery.js','vendor/what-input.js','vendor/foundation.js','swiper.js','vivus.min.js','app.js'];

////////////////////////////////////
var css = [];
for(var i in cssFiles){
  css.push(public+'css/'+cssFiles[i]);
}
var js = [];
for(var i in jsFiles){
  js.push(sjss+jsFiles[i]);
}
///////////////////////////////
function handleError(err){
   // var cmd1 = new run.Command('clear');
   // cmd1.exec();
   var cmd = new run.Command("terminal-notifier -title 'Error' -message 'Revisar código!'");
    cmd.exec();
    console.log(err.toString());
    this.emit('end');
}
/////////////////////////////
gulp.task('sass', ()=>
	gulp.src(scss+'/**/*.scss').on('error', handleError)
	.pipe(sass({ outputStyle:'expended'})).on('error', handleError)
	.pipe(autoprefixer({versions:['last 5 browsers']})).on('error', handleError)
	.pipe(gulp.dest(public+'css/'))
    
);
///////////////////////////
gulp.task('concatcss',['sass'], ()=>
    gulp.src(css).on('error', handleError)
    .pipe(concatCss('bundle.css')).on('error', handleError)
   //.pipe(cssmin()).on('error', handleError)
    .pipe(gulp.dest(public+'css/'))
    
);
///////////////////////////
gulp.task('js', ()=>{
  return gulp.src(js)
    .pipe(concat('bundle.js')).on('error', handleError)
    .pipe(gulp.dest(public+'js/'))
});
/////////////////
gulp.task('watch', () => {
	gulp.watch([public+'css/**/*.css',scss+'**/*.scss'],['concatcss']);
  gulp.watch(sjss+'**/*.js',['js']);
});
gulp.task('default', ['concatcss','js','watch']);
