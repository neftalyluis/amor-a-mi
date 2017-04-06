'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:BienvenidaCtrl
 * @description
 * # BienvenidaCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('BienvenidaCtrl', ["auth", "$scope", "$location", "$routeParams", function(auth, $scope, $location, $routeParams) {

    $scope.cursoId = $routeParams.cursoId;

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.logout = function() {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

    $scope.verCurso = function() {
      //$location.path('/posts/' + postId);
      $location.path('/cursos/' + $scope.cursoId + '/lecciones')
    }

  }]);
