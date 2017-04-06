'use strict';

describe('Controller: BienvenidaCtrl', function () {

  // load the controller's module
  beforeEach(module('amorAMiApp'));

  var BienvenidaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BienvenidaCtrl = $controller('BienvenidaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
