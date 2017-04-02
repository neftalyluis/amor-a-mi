'use strict';

describe('Service: cursodescripcionrepository', function () {

  // load the service's module
  beforeEach(module('amorAMiApp'));

  // instantiate service
  var cursodescripcionrepository;
  beforeEach(inject(function (_cursodescripcionrepository_) {
    cursodescripcionrepository = _cursodescripcionrepository_;
  }));

  it('should do something', function () {
    expect(!!cursodescripcionrepository).toBe(true);
  });

});
