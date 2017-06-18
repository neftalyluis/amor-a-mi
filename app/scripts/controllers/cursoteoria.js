'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:CursoteoriaCtrl
 * @description
 * # CursoteoriaCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('CursoTeoriaCtrl', ['auth', '$scope', '$location', 'cursoRepository', '$routeParams', function(auth, $scope, $location, cursoRepository, $routeParams) {

    $scope.cursoId = $routeParams.cursoId
    $scope.curso = cursoRepository($scope.cursoId)

  }]);
