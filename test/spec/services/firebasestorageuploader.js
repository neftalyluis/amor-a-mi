'use strict';

describe('Service: FirebaseStorageUploader', function () {

  // load the service's module
  beforeEach(module('amorAMiApp'));

  // instantiate service
  var FirebaseStorageUploader;
  beforeEach(inject(function (_FirebaseStorageUploader_) {
    FirebaseStorageUploader = _FirebaseStorageUploader_;
  }));

  it('should do something', function () {
    expect(!!FirebaseStorageUploader).toBe(true);
  });

});
