'use strict';

describe('Service: leccionRepository', function () {

  // load the service's module
  beforeEach(module('amorAMiApp'));

  // instantiate service
  var leccionRepository;
  beforeEach(inject(function (_leccionRepository_) {
    leccionRepository = _leccionRepository_;
  }));

  it('should do something', function () {
    expect(!!leccionRepository).toBe(true);
  });

});
