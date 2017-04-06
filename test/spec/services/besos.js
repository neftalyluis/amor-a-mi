'use strict';

describe('Service: besos', function () {

  // load the service's module
  beforeEach(module('amorAMiApp'));

  // instantiate service
  var besos;
  beforeEach(inject(function (_besos_) {
    besos = _besos_;
  }));

  it('should do something', function () {
    expect(!!besos).toBe(true);
  });

});
