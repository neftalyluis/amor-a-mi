'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:LeccionesCtrl
 * @description
 * # LeccionesCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('LeccionesCtrl', ["auth", "$scope", "$location", "$routeParams", "cursoRepository", function(auth, $scope, $location, $routeParams, cursoRepository) {
    $scope.cursoId = $routeParams.cursoId
    $scope.curso = cursoRepository($scope.cursoId)
    $scope.progreso = "";

    $scope.openBienvenidaModal = function() {
      document.getElementById('bienvenidaModal').click();
    }

    $scope.logout = function() {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

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
