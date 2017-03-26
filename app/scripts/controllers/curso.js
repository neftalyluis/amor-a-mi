'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:CursoCtrl
 * @description
 * # CursoCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('CursoCtrl', ["auth", "$scope", "$location", function (auth, $scope, $location) {
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
