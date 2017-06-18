'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:CursodescripcionCtrl
 * @description
 * # CursodescripcionCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('CursoDescripcionCtrl', ['auth', '$scope', '$location', 'cursoDescripcionRepository', '$routeParams', function(auth, $scope, $location, cursoDescripcionRepository, $routeParams) {

    $scope.cursoId = $routeParams.cursoId
    $scope.curso = cursoDescripcionRepository($scope.cursoId)

  }]);
