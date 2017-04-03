'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:CrearcursoCtrl
 * @description
 * # CrearcursoCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('CrearCursoCtrl', ["auth", "$scope", "$location", "cursosRepository","FirebaseStorageUploader", function(auth, $scope, $location, cursosRepository, FirebaseStorageUploader) {

    $scope.repository = cursosRepository;

    $scope.logout = function() {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

    $scope.curso = {
      nombre: "",
      bienvenida: "",
      descripcion: "",
      fotoCursos: "",
      fotoLecciones: "",
      teoria: "",
      botonTeoria: "",
      lecciones: []
    };

    $scope.leccion = {
      id: 0,
      nombre: "",
      cuerpo: "",
      header: "",
      archivos : []
    }

    $scope.convertToURL = function (toChange){
      return toChange.replace(/ /g, "-").toLowerCase()
    }

    $scope.uploaderFotos = new FirebaseStorageUploader({
      url : "memazo"
    });


  }]);
