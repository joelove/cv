module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ["public"]
        },
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['assets/less/*.less'],
            dest: 'assets/css/',
            ext: '.css'
          }
        ]
      },
      production: {
        options: {
          paths: ["public"],
          cleancss: true
        },
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['assets/less/*.less'],
            dest: 'assets/css/',
            ext: '.css'
          }
        ]
      },
      concat_css: {
        options: {},
        all: {
          src: ["/assets/css/*.css"],
          dest: "public/style.css"
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concat-css');

  grunt.registerTask('default', ['less']);
};