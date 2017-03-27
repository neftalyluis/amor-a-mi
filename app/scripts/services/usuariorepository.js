'use strict';

/**
 * @ngdoc service
 * @name amorAMiApp.usuarioRepository
 * @description
 * # usuarioRepository
 * Factory in the amorAMiApp.
 */
angular.module('amorAMiApp')
  .factory('usuarioRepository',  ["$firebaseArray", function($firebaseArray) {
    var ref = firebase.database().ref("usuarios");
    return $firebaseArray(ref);
  }
]);
