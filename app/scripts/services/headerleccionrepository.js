'use strict';

/**
 * @ngdoc service
 * @name amorAMiApp.headerLeccionRepository
 * @description
 * # headerLeccionRepository
 * Factory in the amorAMiApp.
 */
angular.module('amorAMiApp')
  .factory('headerLeccionRepository', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
