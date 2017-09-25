'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:EbookCtrl
 * @description
 * # EbookCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('EbookCtrl',['$scope', '$firebaseArray', '$firebaseStorage', function ($scope, $firebaseArray, $firebaseStorage) {

    var messagesRef = firebase.database().ref().child("leads");
    $scope.leads = $firebaseArray(messagesRef);

    var ebookRef = firebase.storage().ref().child('ebooks/EBOOK VF.pdf');
    $scope.ebook = $firebaseStorage(ebookRef);

    $scope.emailPushed = false;
    $scope.email = '';

    $scope.url = '';

    $scope.ebook.$getDownloadURL().then(function(url) {
      $scope.url = url;
    });

    $scope.pushLead = function () {
      if($scope.leadForm.mail.$valid) {
        $scope.leads.$add({
          content: $scope.email,
          timestamp: firebase.database.ServerValue.TIMESTAMP
        });

        $scope.emailPushed = true;
      }
    };

  }]);
