'use strict';
/**
 * @ngdoc function
 * @name amorAMiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('amorAMiApp')
  .controller('LoginCtrl', ["$scope", "auth", "$location", function($scope, auth, $location) {

    $scope.loginBtn = true;
    $scope.logoutBtn = true;

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
      $location.path('/cursos');
    }

    function showError(err) {
      $scope.err = err;
    }


  }]);
