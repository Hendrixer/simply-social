/***
    Simple gulpfile. No performance or production task
***/

var gulp    = require('gulp'),
    $       = require('gulp-load-plugins')(),
    bs      = require('browser-sync'),
    reload  = bs.reload;

var paths = {
  'html': 'client/**/*.html',
  'ngScripts': 'client/app/**/*.js',
  'stylus': 'stylus/**/*.styl'
};

gulp.task('jshint', function() {
  return gulp.src(paths.ngScripts)
    .pipe(reload({ stream: true, once: true }))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!bs.active, $.jshint.reporter('fail')));
});

gulp.task('styles', function() {
  return gulp.src('stylus/main.styl')
    .pipe($.stylus())
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('client/styles'));
});


gulp.task('serve', ['styles', 'jshint'], function() {

  bs({
    notify: true,
    logPrefix: ':)',
    server: 'client'
  });

  gulp.watch(paths.html, reload);
  gulp.watch(paths.stylus, ['styles', reload]);
  gulp.watch(paths.ngScripts, ['jshint']);
});

gulp.task('default', ['styles', 'jshint']);
