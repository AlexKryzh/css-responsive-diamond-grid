import config           from '../config';
import gulp              from 'gulp';
import sass              from 'gulp-sass';

gulp.task('build:Styles', function() {
    return gulp.src(config.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.styles.dest));

});