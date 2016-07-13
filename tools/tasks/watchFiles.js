import config               from '../config';
import gulp                  from 'gulp';

gulp.task('watch:Files', ['server'], function() {

    global.isWatching = true;


    gulp.watch([config.templates.main], ['copy:MainIndex']);
    gulp.watch([config.assets.src], ['copy:Assets']);
    gulp.watch([config.styles.src], ['build:Styles']);

    gulp.watch([config.destFiles]).on('change', global.browserSync.reload);

});