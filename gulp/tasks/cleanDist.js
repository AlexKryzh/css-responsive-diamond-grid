import config      from '../config';
import gulp         from 'gulp';
import clean       from 'gulp-clean';

gulp.task('clean:Dist', function() {
    return gulp.src( config.dest, {read: false})
        .pipe(clean());
});