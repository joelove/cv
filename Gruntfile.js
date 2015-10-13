module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["public/css"]
                },
                files: { "public/css/main.css": "assets/less/main.less" }
            },
            production: {
                options: {
                    paths: ["public/css"],
                    cleancss: true
                },
                files: { "public/css/main.css": "assets/less/main.less" }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
};