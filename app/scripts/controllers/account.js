'use strict';

/**
 * @ngdoc function
 * @name muck2App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Provides rudimentary account management functions.
 */
angular.module('amorAMiApp')
  .controller('AccountCtrl', ["$scope", "auth", "currentAuth", "FirebaseStorageUploader", function($scope, auth, currentAuth, FirebaseStorageUploader) {

    $scope.ok = false;

    $scope.uploader = new FirebaseStorageUploader({
      url: 'perfiles/' + currentAuth.uid
    });

    $scope.uploader.onAfterAddingFile = function(item, filter, options) {
      if ($scope.uploader.queue.length > 1) {
        $scope.uploader.queue.splice(0, 1);
      }
    };

    $scope.uploader.onSuccessItem = function(fileItem, response, status, headers) {
      $scope.ok = true;
    };

    $scope.uploader.filters.push({
      name: 'imageFilter',
      fn: function(item /*{File|FileLikeObject}*/ , options) {
        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
      }
    });

  }]);
