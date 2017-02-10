var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function () {
    gulp.src('src/app.jsx')
        .pipe(babel({presets: ['react']}))
        .pipe(gulp.dest('lib'));
});

gulp.task('watch', function(){
	gulp.watch('./src/*.jsx', ['babel']);
});

gulp.task('default', ['babel', 'watch']);