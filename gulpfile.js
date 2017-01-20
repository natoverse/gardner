const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('default', () =>
    gulp.src(['problems/**/*.js'], {read: false})
        .pipe(mocha())
);
