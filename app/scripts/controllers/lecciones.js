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

    $scope.logout = function() {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

    $scope.verLeccion = function(leccionIndex) {
      //$location.path('/posts/' + postId);
      $location.path('/cursos/' + $scope.cursoId + '/lecciones/' + leccionIndex)
    }

  }]);
