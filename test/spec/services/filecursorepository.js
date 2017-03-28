'use strict';

describe('Service: fileCursoRepository', function () {

  // load the service's module
  beforeEach(module('amorAMiApp'));

  // instantiate service
  var fileCursoRepository;
  beforeEach(inject(function (_fileCursoRepository_) {
    fileCursoRepository = _fileCursoRepository_;
  }));

  it('should do something', function () {
    expect(!!fileCursoRepository).toBe(true);
  });

});
