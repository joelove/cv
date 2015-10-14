module.exports = function(grunt) {
  var wkhtmltopdf = require('wkhtmltopdf');
  var fs = require('fs');

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: { 'public/style.css': 'assets/less/*.less' }
      }
    },
    watch: {
      files: ['assets/less/*.less'],
      tasks: ['less']
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
  grunt.loadNpmTasks('grunt-wkhtmltopdf');

  grunt.registerTask('default', ['less']);
  grunt.registerTask('pdf', ['wkhtmltopdf']);
  grunt.registerTask('all', ['less', 'wkhtmltopdf']);
};