'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:ModificarcursoCtrl
 * @description
 * # ModificarcursoCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('ModificarcursoCtrl', ['auth', '$scope', '$location', '$routeParams', 'cursoRepository', 'FirebaseStorageUploader', function(auth, $scope, $location, $routeParams, cursoRepository, FirebaseStorageUploader) {

    $scope.cursoId = $routeParams.cursoId;
    $scope.curso = cursoRepository($scope.cursoId)
    $scope.temporalLeccion = {}

    $scope.addLeccion = function() {

    }

    $scope.cleanLeccion = function() {
      $scope.leccion.id = null
      $scope.leccion.nombre = ''
      $scope.leccion.cuerpo = ''
      $scope.leccion.header = ''
      $scope.leccion.archivos = ''
    }

    $scope.uploadHeader = function() {

    }

    $scope.modifyLeccion = function(id) {
      for (var key in $scope.curso.lecciones) {
        if ($scope.curso.lecciones[key].id === id) {
          $scope.temporalLeccion = $scope.curso.lecciones[key]
          console.log($scope.temporalLeccion)
          console.log($scope.curso.lecciones)
          $('#editarLeccionModal').modal('show')
        }
      }
    }

    $scope.saveLeccion = function() {

    }


  }]);
