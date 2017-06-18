'use strict';

/**
 * @ngdoc service
 * @name amorAMiApp.cursosRepository
 * @description
 * # cursosRepository
 * Factory in the amorAMiApp.
 */
angular.module('amorAMiApp')
  .factory('cursosRepository', ['$firebaseArray', function($firebaseArray) {
    var ref = firebase.database().ref('cursos');
    return $firebaseArray(ref);
  }
]);
