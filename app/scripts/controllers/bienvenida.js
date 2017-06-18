'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:BienvenidaCtrl
 * @description
 * # BienvenidaCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('BienvenidaCtrl', ['auth', '$scope', '$location', '$routeParams', function(auth, $scope, $location, $routeParams) {

    $scope.cursoId = $routeParams.cursoId;

    $scope.verCurso = function() {
      $location.path('/cursos/' + $scope.cursoId + '/lecciones');
    };

  }]);
