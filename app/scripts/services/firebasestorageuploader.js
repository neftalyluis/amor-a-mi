'use strict';

/**
 * @ngdoc service
 * @name amorAMiApp.FirebaseStorageUploader
 * @description
 * # FirebaseStorageUploader
 * Factory in the amorAMiApp.
 */
angular.module('amorAMiApp')
  .factory('FirebaseStorageUploader', ['FileUploader', '$firebaseStorage', function(FileUploader, $firebaseStorage) {

    // Pinche issue de Github :(
    //FileUploader.inherit(FirebaseStorageUploader, FileUploader);

    FirebaseStorageUploader.prototype = FileUploader.prototype;
    FirebaseStorageUploader.super_ = FileUploader;

    function FirebaseStorageUploader(options) {
      FirebaseStorageUploader.super_.apply(this, arguments);
    };

    FirebaseStorageUploader.prototype.uploadItem = function(value) {

      var index = this.getIndexOfItem(value);
      var item = this.queue[index];
      self = this;

      item._prepareToUploading();
      if (this.isUploading) return;

      this._onBeforeUploadItem(item);
      if (item.isCancel) return;

      item.isUploading = true;
      this.isUploading = true;

      var storageRef = firebase.storage().ref().child(item.url);
      var storage = $firebaseStorage(storageRef);
      var uploadTask = storage.$put(item._file);

      uploadTask.$progress(function(snapshot) {
        var percentUploaded = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        self._onProgressItem(item, percentUploaded);
      });

      uploadTask.$complete(function(snapshot) {
        self._onCompleteItem(item, snapshot.downloadURL, '', '');
        self._onSuccessItem(item, snapshot.downloadURL, '', '');
      });

      uploadTask.$error(function(error) {
        self._onErrorItem(item, error, '', '');
      });

      this._render();
    };

    return FirebaseStorageUploader;

  }]);
