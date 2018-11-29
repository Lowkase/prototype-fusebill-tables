// PACKAGES
// --------------------------------------------------------------------------------
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var del = require('del');
var gulp  = require('gulp');
var imagemin = require('gulp-imagemin');
var minify = require('gulp-minify');
var minifycss = require('gulp-minify-css');
var minimist = require('minimist');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var util = require('gulp-util');


// TASKS
// --------------------------------------------------------------------------------
// SASS
gulp.task('sass', function () {
  util.log('-- Sass precompiling');
  return gulp.src(['./assets/styles/**/*.scss'])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 4 versions']
        }))
    .pipe(gulp.dest('./assets/styles'))        
    .on('end', function() {
     });;
});

// SCRIPTS
gulp.task('scripts', function () {
  util.log('-- Scripts changed');
});

// HTML
gulp.task('html', function () {
  util.log('-- Html changed');
});


// WATCH
// --------------------------------------------------------------------------------
// GULP WATCH - With browser-sync
gulp.task('watch', ['sass'], function () {
    util.log('-- Init browser-sync');
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });

    util.log('-- Init watchers');

    // SASS / CSS
    gulp.watch("./assets/**/*.scss", ['sass']).on('change', browserSync.reload);

    // SCRIPTS
    gulp.watch("./assets/**/*.js", ['scripts']).on('change', browserSync.reload);

    // HTML
    gulp.watch("./*.html", ['html']).on('change', browserSync.reload);
    gulp.watch("./assets/**/*.html", ['html']).on('change', browserSync.reload);
});