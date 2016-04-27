var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');

gulp.task('app:scripts', function () {
    return gulp.src([
      './src/app.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('app.bundle.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
});

gulp.task('app:vendor', function () {
  return gulp.src(require('./dependensies.json').javacripts)
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

gulp.task('app:watch', function () {
  gulp.watch('./src/index.html', ['app:index']);
  gulp.watch('./src/*.js', ['app:scripts']);
});

gulp.task('default', function () {
  return gulp.start(
    'app:watch', 'app:vendor',
    'app:scripts', 'app:index', 'app:server'
  );
});
