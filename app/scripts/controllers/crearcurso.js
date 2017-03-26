'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:CrearcursoCtrl
 * @description
 * # CrearcursoCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('CrearcursoCtrl', ["auth", "$scope", "$location", function (auth, $scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.logout = function () {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

  }]);
