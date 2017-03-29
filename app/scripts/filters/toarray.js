'use strict';

/**
 * @ngdoc filter
 * @name amorAMiApp.filter:toArray
 * @function
 * @description
 * # toArray
 * Filter in the amorAMiApp.
 */
angular.module('amorAMiApp')
  .filter('toArray', function () {
    return function(obj) {
        var result = [];
        angular.forEach(obj, function(val, key) {
            val.ruta = key
            result.push(val);
        });
        return result;
    };
  });
