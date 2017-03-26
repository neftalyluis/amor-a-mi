'use strict';

describe('Controller: LeccionCtrl', function () {

  // load the controller's module
  beforeEach(module('amorAMiApp'));

  var LeccionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LeccionCtrl = $controller('LeccionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
