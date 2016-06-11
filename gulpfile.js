var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var concatUtil = require('gulp-concat-util');
var riot = require('gulp-riot');
var _ = require('lodash')
var realm = require('realm-js');
var runSequence = require('run-sequence');
var spawn = require('child_process').spawn;
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

var node;

gulp.task('server', function() {
   if (node) node.kill()
   node = spawn('node', ['app.js'], {
      stdio: 'inherit'
   })
   node.on('close', function(code) {
      if (code === 8) {
         gulp.log('Error detected, waiting for changes...');
      }
   });
});

gulp.task('watch', function() {
   gulp.watch(['src/**/*.js'], ['build']);
   gulp.watch(['views/**/*.html'], ['build-views']);

   //gulp.watch(['views/**/*.html'], ['build-views']);
});

gulp.task("build", function(done) {
   return realm.transpiler2.universal("src/", "build/");
});;

gulp.task("riot", function() {
   return gulp.src("src/app/tags/**/*.tag")
      .pipe(riot({
         compact: true
      }))
      .pipe(realm.transpiler2.gulp(__dirname + "/src/app/tags/", "tags.js", {
         preffix: "app.tags"
      }))
      .on('error', function(e) {
         console.log(e.stack);
         this.emit('end');
      })
      .pipe(gulp.dest('./build'));
});

gulp.task('start', function() {
   return runSequence('riot', 'build', function() {
      runSequence('server')

      gulp.watch(['src/**/*.js'], function() {
         return realm.transpiler2.universal("src/", "build/").then(function(changes) {
            runSequence('server')
         });
      });

      gulp.watch(['src/app/tags/**/*.tag'], function() {
         runSequence('riot');
      });

   });
});
