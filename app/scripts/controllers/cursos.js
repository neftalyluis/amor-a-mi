'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:MiscursosCtrl
 * @description
 * # MiscursosCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('CursosCtrl', ['currentAuth', '$scope', '$location', 'cursosRepository', function(currentAuth, $scope, $location, cursosRepository) {

    $scope.user = currentAuth;
    $scope.cursos = cursosRepository;

    $scope.verCurso = function(cursoId) {
      //$location.path('/posts/' + postId);
      $location.path('/cursos/' + cursoId + '/bienvenida')
    }

  }]);
