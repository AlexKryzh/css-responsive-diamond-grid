import config             from '../config';
import gulp                from 'gulp';
import sass               from 'gulp-sass';
import sourcemaps   from 'gulp-sourcemaps';
import autoprefixer   from 'gulp-autoprefixer';

gulp.task('build:Styles', function() {
    return gulp.src(config.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass(config.styles.options.sass).on('error', sass.logError))
        .pipe(autoprefixer(config.styles.options.autoprefixer))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.styles.dest));

});