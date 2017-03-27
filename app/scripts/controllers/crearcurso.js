'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:CrearcursoCtrl
 * @description
 * # CrearcursoCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('CrearCursoCtrl', ["auth", "$scope", "$location","cursosRepository", function(auth, $scope, $location, cursosRepository) {

    $scope.repository = cursosRepository;

    $scope.logout = function() {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

    $scope.curso = {
      nombre: "",
      descripcion: "",
      lecciones : []
    };

    $scope.leccionNombre;
    $scope.leccionCuerpo;
    $scope.archivos = [];

    $scope.archivoNombre;
    $scope.archivoPayload;

    $scope.agregarLeccion = function() {
      $scope.curso.lecciones.push({
        nombre: $scope.leccionNombre,
        cuerpo: $scope.leccionCuerpo,
        archivos: $scope.archivos
      })
    };

    $scope.agregarArchivo = function() {
      $scope.archivos.push({
        nombre: $scope.archivoNombre,
        payload: $scope.archivoPayload
      })
    };

    $scope.crearCurso = function () {
      $scope.repository.$add($scope.curso);

    };

  }]);
