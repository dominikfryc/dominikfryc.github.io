// Load Grunt
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Tasks
    sass: {
      dist: {
        options: {
          style: 'compressed',
          update: true
        },
        files: {
					'css/styles.min.css' : 'css/styles.scss'
				}
      }
		},
    watch: {
      css: {
				files: '**/*.scss',
				tasks: ['sass']
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
              'css/*.css',
              '*.html'
          ]
        },
        options: {
          watchTask: true,
          server: {
              baseDir: "./"
          }
        }
      }
    }
  });

  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register Grunt tasks
  grunt.registerTask('default', ['browserSync', 'watch']);
};
