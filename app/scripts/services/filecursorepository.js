'use strict';

/**
 * @ngdoc service
 * @name amorAMiApp.fileCursoRepository
 * @description
 * # fileCursoRepository
 * Factory in the amorAMiApp.
 */
angular.module('amorAMiApp')
  .factory('fileCursoRepository', ['$firebaseStorage', function($firebaseStorage) {
    return function(cursoId, leccionId, nombreArchivo) {
      var ref = firebase.storage().ref().child('cursos/' + cursoId + '/' + leccionId + '/' + nombreArchivo);
      return $firebaseStorage(ref);
    }
  }]);
