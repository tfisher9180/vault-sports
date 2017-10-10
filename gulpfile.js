var basePaths = {
  node: 'node_modules/',
  src:  'src/',
  sass: 'process/sass/',
  dest: 'build/'
};

var gulp 			    = require('gulp');
var postcss 		  = require('gulp-postcss');
var sass 			    = require('gulp-sass');
var cssnano 		  = require('cssnano');
var autoprefixer 	= require('autoprefixer');
var animation 		= require('postcss-animation');

// Process CSS - compile SASS/minify
gulp.task('css', function() {
  return gulp.src(basePaths.sass + 'style.scss')
  .pipe(sass())
  .pipe(postcss([
    animation(),
    autoprefixer('last 2 versions', '> 1%'),
    cssnano()
  ]))
  .pipe(gulp.dest(basePaths.dest + 'css'));
});

// Get assets from node_modules
gulp.task('assets', function() {
  return gulp.src(basePaths.node + 'normalize-scss/sass/**/*.scss')
    .pipe(gulp.dest(basePaths.src + 'normalize'));
});

// Watch for changes
gulp.task('watch', function() {
  gulp.watch(basePaths.sass + '**/*.scss', ['css']);
});

// Gulp
gulp.task('default', ['css', 'watch']);
