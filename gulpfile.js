var gulp 			= require('gulp');
var postcss 		= require('gulp-postcss');
var sass 			= require('gulp-sass');
var cssnano 		= require('gulp-cssnano');
var autoprefixer 	= require('autoprefixer');
var animation 		= require('postcss-animation');

var source			= 'process/sass/';
var dest			= 'build/';