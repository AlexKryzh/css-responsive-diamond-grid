import config                   from '../config';
import gulp                      from 'gulp';

gulp.task('copy:Assets', function() {
    return gulp.src(config.assets.src)
        .pipe( gulp.dest(config.assets.dest) );
});