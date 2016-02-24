var gulp = require('gulp'),
    less = require('gulp-less'),
    stylus = require('gulp-stylus'),
    jade  = require('gulp-jade'),
    clean = require('gulp-clean');

gulp.task('templates', function () {
  return gulp.src('./src/*.jade')
    .pipe(jade({
      // pretty: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('stylesheets:stylus', function () {
  return gulp.src('./src/index.styl')
    .pipe(stylus({
      'include css': true,
      'compress': true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('stylesheets:less', function () {
  return gulp.src('./src/less/*.less')
    .pipe(less())
    pipe(gulp.dest('./dist'));
});

gulp.task('clean', function () {
  return gulp.src('./dist')
    .pipe(clean());
});

gulp.task('watch', ['clean'], function () {
  gulp.watch('./src/*.jade', ['templates']);
  gulp.watch('./src/*.styl', ['stylesheets:stylus']);
});

gulp.task('default', ['clean'], function () {
  gulp.start('templates', 'stylesheets:stylus', 'watch');
});
