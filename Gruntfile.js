module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    pkg: require('./package.json'),
    simplemocha: {
      src: 'test/**/*Spec.js',
      options: {
        reporter: 'spec'
      }
    }
  });

  grunt.registerTask('start', ['watch']);
  grunt.registerTask('test', ['simplemocha']);
  grunt.registerTask('default', ['test']);
};