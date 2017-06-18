'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:LeccionesCtrl
 * @description
 * # LeccionesCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('LeccionesCtrl', ['auth', '$scope', '$location', '$routeParams', 'cursoRepository', 'avanceCursoRepository', 'currentAuth', function(auth, $scope, $location, $routeParams, cursoRepository, avanceCursoRepository, currentAuth) {
    $scope.cursoId = $routeParams.cursoId
    $scope.curso = cursoRepository($scope.cursoId)
    $scope.progreso = '';
    $scope.checked = avanceCursoRepository(currentAuth.uid)


    $scope.openBienvenidaModal = function() {
      //document.getElementById('bienvenidaModal').click();
    }

    $scope.verLeccion = function(leccionIndex) {
      $location.path('/cursos/' + $scope.cursoId + '/lecciones/' + leccionIndex)
    }

    $scope.verCursos = function() {
      $location.path('/cursos/')
    }

    $scope.verTeoria = function() {
      $location.path('/cursos/' + $scope.cursoId + '/teoria')
    }

  }]);
