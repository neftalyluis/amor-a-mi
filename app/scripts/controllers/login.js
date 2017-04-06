'use strict';
/**
 * @ngdoc function
 * @name amorAMiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('amorAMiApp')
  .controller('LoginCtrl', ["$scope", "auth", "$location", "besos", function($scope, auth, $location, besos) {

    $scope.loginBtn = true;
    $scope.logoutBtn = true;
    $scope.besos = besos()

    auth.$onAuthStateChanged(function(authData) {
      if (authData) {
        console.log(" logged: " + authData.uid);
        $scope.logoutBtn = true;
        $scope.loginBtn = false;
        $location.path('/cursos');
      }
    });

    // Autenthication with password and email
    $scope.passwordLogin = function(email, pass) {

      auth.$signInWithEmailAndPassword(email, pass)
        .then(function(authData) {
          redirect();
          console.log("logged");
        })
        .catch(function(error) {
          showError(error);
          console.log("error: " + error);
        });
    };

    function redirect() {
      $scope.playBeso();
      $location.path('/cursos');
    }

    function showError(err) {
      $scope.err = err;
    }

    $scope.playBeso = function() {

      $scope.besos.$getDownloadURL().then(function(url) {
        var audio = new Audio(url);
        audio.play();
      });

    }


  }]);
