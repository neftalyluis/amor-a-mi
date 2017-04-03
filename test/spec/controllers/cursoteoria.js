'use strict';

describe('Controller: CursoteoriaCtrl', function () {

  // load the controller's module
  beforeEach(module('amorAMiApp'));

  var CursoteoriaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CursoteoriaCtrl = $controller('CursoteoriaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
