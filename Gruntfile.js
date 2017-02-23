module.exports = function (grunt) {
    grunt.initConfig({
        clean: ['./dist'],

        browserify: {
            development: {
                src: [
                    './src/hls-dep-test.js'
                ],
                dest: './dist/hls-dep-test.js',
                options: {
                    browserifyOptions: {
                        debug: true,
                        watch: true,
                        keepAlive: false,
                        standalone: 'createPlayer'
                    },
                    transform: [['babelify', {presets: ['es2015']}]]
                }
            }
        },

        watch: {
            scripts: {
                files: ['./src/*.js','index.html'],
                tasks: ['browserify']
            },
            options: {
                livereload: true
            }
        },

        connect: {
            dev: {
                options: {
                    port: 9000,
                    livereload: false,
                    base: '.'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('dev', function(target) {

        grunt.task.run([
            'clean',
            'browserify',
            'connect',
            'watch'
        ]);

    });
};
