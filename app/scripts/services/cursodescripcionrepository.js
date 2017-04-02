'use strict';

/**
 * @ngdoc service
 * @name amorAMiApp.cursodescripcionrepository
 * @description
 * # cursodescripcionrepository
 * Factory in the amorAMiApp.
 */
angular.module('amorAMiApp')
  .factory('cursoDescripcionRepository', ["$firebaseObject", function($firebaseObject) {
    return function(cursoId) {
      var ref = firebase.database().ref("showcase").child(cursoId);
      return $firebaseObject(ref);
    }
  }]);
