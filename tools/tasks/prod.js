import gulp                           from 'gulp';
import runSequence             from 'run-sequence';

gulp.task('prod', function(cb) {

    cb = cb || function() {};

    global.env = 'prod';

    runSequence(
        [
            'clean:Dist'
        ],
        [
            'build:Styles'
        ],
        [
            'copy:Assets'
        ],
        [
            'copy:MainIndex'
        ],
        cb
    );

});