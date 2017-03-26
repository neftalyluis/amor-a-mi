'use strict';

describe('Controller: LeccionesCtrl', function () {

  // load the controller's module
  beforeEach(module('amorAMiApp'));

  var LeccionesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LeccionesCtrl = $controller('LeccionesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
