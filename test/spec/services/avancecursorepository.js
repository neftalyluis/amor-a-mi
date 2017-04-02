'use strict';

describe('Service: avanceCursoRepository', function () {

  // load the service's module
  beforeEach(module('amorAMiApp'));

  // instantiate service
  var avanceCursoRepository;
  beforeEach(inject(function (_avanceCursoRepository_) {
    avanceCursoRepository = _avanceCursoRepository_;
  }));

  it('should do something', function () {
    expect(!!avanceCursoRepository).toBe(true);
  });

});
