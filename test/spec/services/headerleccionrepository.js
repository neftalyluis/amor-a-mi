'use strict';

describe('Service: headerLeccionRepository', function () {

  // load the service's module
  beforeEach(module('amorAMiApp'));

  // instantiate service
  var headerLeccionRepository;
  beforeEach(inject(function (_headerLeccionRepository_) {
    headerLeccionRepository = _headerLeccionRepository_;
  }));

  it('should do something', function () {
    expect(!!headerLeccionRepository).toBe(true);
  });

});
