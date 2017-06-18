'use strict';

/**
 * @ngdoc service
 * @name amorAMiApp.besos
 * @description
 * # besos
 * Service in the amorAMiApp.
 */
angular.module('amorAMiApp')
  .factory('besos', ['$firebaseStorage', function($firebaseStorage) {
    return function() {
      var ref = firebase.storage().ref().child('besos.ogg');
      return $firebaseStorage(ref);
    }
  }]);
