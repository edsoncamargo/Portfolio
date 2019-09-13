import { TestBed, inject } from '@angular/core/testing';

import { ConnectionUtilsService } from './connection-utils.service';

describe('ConnectionUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectionUtilsService]
    });
  });

  it('should be created', inject([ConnectionUtilsService], (service: ConnectionUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
