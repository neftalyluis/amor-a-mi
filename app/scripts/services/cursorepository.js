'use strict';

/**
 * @ngdoc service
 * @name amorAMiApp.cursoRepository
 * @description
 * # cursoRepository
 * Factory in the amorAMiApp.
 */
angular.module('amorAMiApp')
  .factory('cursoRepository', ['$firebaseObject', function($firebaseObject) {
      return function(cursoId) {
        var ref = firebase.database().ref('cursos').child(cursoId);
        return $firebaseObject(ref);
      }
    }
  ]);
