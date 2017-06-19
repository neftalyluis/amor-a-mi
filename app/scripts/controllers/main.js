'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('MainCtrl', ['auth', '$scope', '$location', function(auth, $scope, $location) {

    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    }

    $scope.currentAuth = auth

    $scope.path = $location.path()

    $scope.urlProfile = 'perfiles/';

    $scope.uid = '';
    $scope.showProfile = false;
    $scope.showCourseName = false;
    $scope.courseName = '';

    $scope.$on('$locationChangeStart', function(event) {
      if ($scope.currentAuth.$getAuth() !== null) {
        $scope.uid = $scope.currentAuth.$getAuth().uid
        $scope.showProfile = true
      }

      if ($location.path().split('/')[3] === 'lecciones') {
        $scope.showCourseName = true;
        var curso = $location.path().split('/')[2]
        $scope.courseName = curso.charAt(0).toUpperCase() + curso.slice(1).replace('-', ' ');
        $scope.courseName = $scope.courseName.replace('-', ' ');
      }
    });

    $scope.goToAAM = function() {
      $location.path('/info/amor-a-mi')
    }

    $scope.goToAAA = function() {
      $location.path('/info/atrae-al-amor-de-tu-vida')
    }

    $scope.goToC = function() {
      $location.path('/info/coaching')
    }

    $scope.goToCourses = function() {
      $location.path('/cursos')
    }

  }]);
