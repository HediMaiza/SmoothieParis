module.exports = function(grunt){

  //Config de Grunt
  grunt.initConfig({
    cssmin: {
      combine: {
        files: {
          'css/built.css': ['css/base.css', 'css/layout.css', 'css/skeleton.css', 'css/main.css']
        }
      }
    }
  })

  // Import du package
  grunt.loadNpmTasks('grunt-contrib-cssmin')

  // Redéfinition de la tâche `default` qui est la tâche lancée dès que vous lancez Grunt sans rien spécifier.
  // Note : ici, nous définissons sass comme une tâche à lancer si on lance la tâche `default`.
  grunt.registerTask('default', ['cssmin'])
}