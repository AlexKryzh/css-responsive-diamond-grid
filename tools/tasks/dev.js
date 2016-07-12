import gulp                           from 'gulp';
import runSequence             from 'run-sequence';

gulp.task('dev', function(cb) {

    cb = cb || function() {};

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
        [
            'watch:Files'
        ], 
        cb
    );

});