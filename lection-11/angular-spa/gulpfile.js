var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');

var env = process.env.NODE_ENV || 'dev';

var configFile = './src/config/config.' + env + '.js';

gulp.task('app:scripts', function () {
    return gulp.src([
      '!(./src/config/*.js)',
      './src/app.js',
      configFile,
      './src/modules/**/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('app.bundle.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
});

gulp.task('app:vendor', function () {
  return gulp.src(require('./dependensies.json').javascripts)
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(sourcemaps.write())
    .pipe(connect.reload())
});

gulp.task('app:server', function () {
  connect.server({
    root: './dist',
    livereload: true
  });
});

gulp.task('app:index', function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('app:templates', function () {
  return gulp.src('./src/modules/**/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('app:watch', function () {
  gulp.watch('./src/index.html', ['app:index']);
  gulp.watch([
    './src/*.js',
    './src/modules/**/*.js',
  ], ['app:scripts']);

  gulp.watch('./src/modules/**/*.html', ['app:templates']);
});

gulp.task('default', function () {
  return gulp.start(
    'app:watch', 'app:vendor',
    'app:scripts', 'app:index', 'app:templates', 'app:server'
  );
});
