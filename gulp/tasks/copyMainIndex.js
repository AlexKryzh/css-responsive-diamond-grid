import config                   from '../config';
import gulp                      from 'gulp';

//Main app html file
gulp.task('copy:MainIndex', function() {
    return gulp.src(config.templates.main)
        .pipe( gulp.dest(config.dest) );
});