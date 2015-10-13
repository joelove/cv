module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["public"]
                },
                files: { "public/style.css": "assets/less/main.less" }
            },
            production: {
                options: {
                    paths: ["public"],
                    cleancss: true
                },
                files: { "public/style.css": "assets/less/main.less" }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
};