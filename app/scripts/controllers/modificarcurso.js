'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:ModificarcursoCtrl
 * @description
 * # ModificarcursoCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('ModificarcursoCtrl', ["auth", "$scope", "$location", function (auth, $scope, $location) {

    $scope.logout = function () {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

  }]);
