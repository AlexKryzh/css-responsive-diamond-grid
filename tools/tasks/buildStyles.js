import config             from '../config';
import gulp                from 'gulp';
import sass               from 'gulp-sass';
import sourcemaps   from 'gulp-sourcemaps';
import autoprefixer   from 'gulp-autoprefixer';
import gulpif             from 'gulp-if';

gulp.task('build:Styles', function() {
    return gulp.src(config.styles.src)
        .pipe(gulpif(global.env === 'dev', sourcemaps.init()))
        .pipe(sass(config.styles.options.sass[global.env]).on('error', sass.logError))
        .pipe(autoprefixer(config.styles.options.autoprefixer))
        .pipe(gulpif(global.env === 'dev', sourcemaps.write()))
        .pipe(gulp.dest(config.styles.dest));

});