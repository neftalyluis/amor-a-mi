'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:MiscursosCtrl
 * @description
 * # MiscursosCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('CursosCtrl', ["currentAuth", "$scope", "$location", "$firebaseObject", function(currentAuth, $scope, $location, $firebaseObject) {

    $scope.user = currentAuth;

    $scope.cursos = [
      {
        "nombre": "Curso 1 ",
        "descripcion": "El Mejor Curso del Mundo"
      },
      {
        "nombre": "Curso 1 ",
        "descripcion": "El Mejor Curso del Mundo"
      },
      {
        "nombre": "Curso 1 ",
        "descripcion": "El Mejor Curso del Mundo"
      }
    ];

    $scope.logout = function() {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

  }]);
