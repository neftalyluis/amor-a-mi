'use strict';

/**
 * @ngdoc service
 * @name amorAMiApp.avanceCursoRepository
 * @description
 * # avanceCursoRepository
 * Factory in the amorAMiApp.
 */
angular.module('amorAMiApp')
  .factory('avanceCursoRepository', ["$firebaseObject", function($firebaseObject) {
    return function(userId) {
      var ref = firebase.database().ref("perfiles/" + userId);
      return $firebaseObject(ref);
    }
  }]);
