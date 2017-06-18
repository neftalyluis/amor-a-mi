'use strict';

/**
 * @ngdoc directive
 * @name amorAMiApp.directive:fileUpload
 * @description
 * # fileModel
 */
angular.module('amorAMiApp')
  .directive('fileUpload', function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        onChange: '='
      },
      template: '<input type="file" name="file" /><label><ng-transclude></ng-transclude></label>',
      link: function (scope, element, attrs) {
        element.bind('change', function () {
          scope.onChange(element.children()[0].files);
        });
      }
    }
  });
