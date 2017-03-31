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

    $scope.myHtml = '';

    $scope.curso = {
      nombre: "",
      bienvenida: "",
      botonBienvenida: "",
      descripcion: "",
      lecciones: []
    };

    $scope.leccion = {
      id: 0,
      nombre: "",
      cuerpo: "",
      archivos : []
    }

    $scope.uploader = new FirebaseStorageUploader({
      url : "memazo"
    });


  }]);
