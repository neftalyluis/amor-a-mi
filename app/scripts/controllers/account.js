'use strict';

/**
 * @ngdoc function
 * @name muck2App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Provides rudimentary account management functions.
 */
angular.module('amorAMiApp')
  .controller('AccountCtrl', ["$scope", "auth", "currentAuth", "$firebaseStorage", function($scope, auth, currentAuth, $firebaseStorage) {

    $scope.user = {
      uid: currentAuth.uid,
      name: currentAuth.displayName,
      photo: currentAuth.photoURL,
      email: currentAuth.email
    };

    $scope.authInfo = currentAuth;

    $scope.updateProfile = function(name, imgUrl) {
      firebase.auth().currentUser.updateProfile({
          displayName: name,
          photoURL: imgUrl
        })
        .then(function() {
          console.log("Actualizado");
        })
        .catch(function(error) {
          console.log("error ", error);
        })
    };

    $scope.storageRef = firebase.storage().ref("perfiles/" + currentAuth.uid);
    $scope.storage = $firebaseStorage($scope.storageRef);
    $scope.fileToUpload = null;

    $scope.onChange = function (fileList) {
      $scope.fileToUpload = fileList[0];
    };

    $scope.guardarURL = function (){
      $scope.storage.$put($scope.fileToUpload);
    }

  }]);
