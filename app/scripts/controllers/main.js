'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('MainCtrl', ["auth", "$scope", "$location", function(auth, $scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    }

    $scope.showHeader = $location.path() === '/';

    $scope.logout = function() {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

  }]);
