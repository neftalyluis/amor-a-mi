'use strict';

describe('Service: cursoRepository', function () {

  // load the service's module
  beforeEach(module('amorAMiApp'));

  // instantiate service
  var cursoRepository;
  beforeEach(inject(function (_cursoRepository_) {
    cursoRepository = _cursoRepository_;
  }));

  it('should do something', function () {
    expect(!!cursoRepository).toBe(true);
  });

});
