import { TestBed, inject } from '@angular/core/testing';

import { AboutStorageService } from './about-storage.service';

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutStorageService]
    });
  });

  it('should be created', inject([AboutStorageService], (service: AboutStorageService) => {
    expect(service).toBeTruthy();
  }));
});
