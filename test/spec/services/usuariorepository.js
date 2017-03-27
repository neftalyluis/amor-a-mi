'use strict';

describe('Service: usuarioRepository', function () {

  // load the service's module
  beforeEach(module('amorAMiApp'));

  // instantiate service
  var usuarioRepository;
  beforeEach(inject(function (_usuarioRepository_) {
    usuarioRepository = _usuarioRepository_;
  }));

  it('should do something', function () {
    expect(!!usuarioRepository).toBe(true);
  });

});
