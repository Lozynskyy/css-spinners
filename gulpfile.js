var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src('style/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('style/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './'
        },
        browser: ["google chrome"],
        notify: false
    });
    gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('style/scss/**/*.scss', ['sass']);
});

gulp.task('default',['watch']);