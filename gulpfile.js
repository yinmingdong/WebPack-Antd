var gulp = require('gulp');
var uglify = require('gulp-uglify');
var less = require('gulp-less');

// gulp.task('default', function() {
//     // 将你的默认的任务代码放在这
//     console.log("ymd");
// });
gulp.task('default',['script','less','watch']);

gulp.task('script',function () {
    gulp.src('public/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('entry'));
});

gulp.task('less',function () {
    gulp.src('app/*.less')
        .pipe(less())
        .pipe(gulp.dest('entry'));
});

gulp.task('watch',function () {
    gulp.watch('public/*.js',['script']);
    gulp.watch('app/*less',['less']);
});