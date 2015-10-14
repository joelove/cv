module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: { "public/style.css": "assets/less/*.less" }
      }
    },
    watch: {
      files: ['assets/less/*.less'],
      tasks: ['less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less']);
};