'use strict';

describe('Controller: ModificarcursoCtrl', function () {

  // load the controller's module
  beforeEach(module('amorAMiApp'));

  var ModificarcursoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModificarcursoCtrl = $controller('ModificarcursoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
