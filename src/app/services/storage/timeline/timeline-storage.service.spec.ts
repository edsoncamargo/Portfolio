import { TestBed, inject } from '@angular/core/testing';

import { TimelineStorageService } from './timeline-storage.service';

describe('TimelineStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimelineStorageService]
    });
  });

  it('should be created', inject([TimelineStorageService], (service: TimelineStorageService) => {
    expect(service).toBeTruthy();
  }));
});
