module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          'public/style.css': 'src/less/**/*.less'
        }
      }
    },
    jade: {
      development: {
        files: {
          'public/index.html': 'src/jade/**/*.jade'
        }
      }
    },
    watch: {
      files: ['src/less/**/*.less', 'src/jade/**/*.jade'],
      tasks: ['less', 'jade']
    },
    wkhtmltopdf: {
      dev: {
        src: 'public/index.html',
        dest: 'public/'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-wkhtmltopdf');

  grunt.registerTask('default', ['less', 'jade']);
  grunt.registerTask('pdf', ['wkhtmltopdf']);
  grunt.registerTask('all', ['less', 'jade', 'wkhtmltopdf']);
};
