'use strict';

describe('Controller: CursodescripcionCtrl', function () {

  // load the controller's module
  beforeEach(module('amorAMiApp'));

  var CursodescripcionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CursodescripcionCtrl = $controller('CursodescripcionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
