import { TestBed, inject } from '@angular/core/testing';

import { ProjectsStorageService } from './projects-storage.service';

describe('ProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsStorageService]
    });
  });

  it('should be created', inject([ProjectsStorageService], (service: ProjectsStorageService) => {
    expect(service).toBeTruthy();
  }));
});
