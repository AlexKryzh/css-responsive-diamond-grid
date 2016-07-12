export default {

    app:{
        name: 'React Seed'
    },

    browserPort: 3005,
    UIPort: 3006,

    src: './src/',
    dest: './dist/',
    destFiles: './dist/**/*',

    assetExtensions: [
        'js',
        'json',
        'css',
        'png',
        'jpe?g',
        'gif',
        'svg',
        'eot',
        'otf',
        'ttc',
        'ttf',
        'woff',
        'woff2?'
    ],

    tools: {
        src: 'tools/**/*'
    },

    templates: {
        main: 'src/index.html'
    },

    styles: {
        src: ['src/styles/app.scss'],
        dest: 'dist/styles',
        options: {
            sass: {outputStyle: 'compressed'},
            autoprefixer: {
                browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
            }
        }
    },

    assets: {
        src: ['src/assets/**/*'],
        dest: 'dist/assets'
    },

    init: function() {
        return this;
    }
    
}.init();