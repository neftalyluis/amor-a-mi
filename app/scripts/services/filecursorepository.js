'use strict';

/**
 * @ngdoc service
 * @name amorAMiApp.fileCursoRepository
 * @description
 * # fileCursoRepository
 * Factory in the amorAMiApp.
 */
angular.module('amorAMiApp')
  .factory('fileCursoRepository', ["$firebaseStorage", function($firebaseStorage) {
    return function(cursoId, leccionId) {
      var ref = firebase.storage().ref("cursos/" + cursoId + "/lecciones/" + leccionId);
      return $firebaseStorage(ref);
    }
  }
]);
