var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');

var files = {
  src: ['src/js/app.js', 'src/js/module.js', 'src/js/controller.js'],
  filename: 'build.js',
  dist: 'dist'
};

gulp.task('javascript', function () {
  return gulp.src(files.src)
    .pipe(concat(files.filename))
    .pipe(uglify())
    .pipe(gulp.dest(files.dist));
});

gulp.task('clean', function () {
  return gulp.src('dist')
    .pipe(clean());
});

gulp.task('default', ['clean'], function () {
  gulp.start('javascript');
});
