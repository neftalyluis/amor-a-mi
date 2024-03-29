'use strict';

describe('Controller: SesioncoachingCtrl', function () {

  // load the controller's module
  beforeEach(module('amorAMiApp'));

  var SesioncoachingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SesioncoachingCtrl = $controller('SesioncoachingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
