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

    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    }

  }]);
