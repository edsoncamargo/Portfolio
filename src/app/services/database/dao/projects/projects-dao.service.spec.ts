import { TestBed, inject } from '@angular/core/testing';

import { ProjectsDaoService } from './projects-dao.service';

describe('PostsDaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsDaoService]
    });
  });

  it('should be created', inject([ProjectsDaoService], (service: ProjectsDaoService) => {
    expect(service).toBeTruthy();
  }));
});
