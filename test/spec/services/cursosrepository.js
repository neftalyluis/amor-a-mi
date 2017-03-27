'use strict';

describe('Service: cursosRepository', function () {

  // load the service's module
  beforeEach(module('amorAMiApp'));

  // instantiate service
  var cursosRepository;
  beforeEach(inject(function (_cursosRepository_) {
    cursosRepository = _cursosRepository_;
  }));

  it('should do something', function () {
    expect(!!cursosRepository).toBe(true);
  });

});
