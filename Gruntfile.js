module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: { "public/style.css": "assets/less/*.less" }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less']);
};