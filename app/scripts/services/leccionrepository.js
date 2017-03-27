'use strict';

/**
 * @ngdoc service
 * @name amorAMiApp.leccionRepository
 * @description
 * # leccionRepository
 * Factory in the amorAMiApp.
 */
angular.module('amorAMiApp')
  .factory('leccionRepository', ["$firebaseObject", function($firebaseObject) {
    return function(cursoId, leccionId) {
      var ref = firebase.database().ref("cursos/" + cursoId + "/lecciones").child(leccionId);
      return $firebaseObject(ref);
    }
  }]);
