'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:LeccionCtrl
 * @description
 * # LeccionCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('LeccionCtrl', ["auth", "$scope", "$location", "$routeParams", "leccionRepository", function(auth, $scope, $location, $routeParams, leccionRepository) {

    $scope.cursoId = $routeParams.cursoId;
    $scope.leccionId = $routeParams.leccionId;
    $scope.leccion = leccionRepository($scope.cursoId, $scope.leccionId)

    $scope.logout = function () {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

  }]);
