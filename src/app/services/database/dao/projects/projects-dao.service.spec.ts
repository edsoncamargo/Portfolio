import { TestBed, inject } from '@angular/core/testing';

import { PostsDaoService } from './projects-dao.service';

describe('PostsDaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsDaoService]
    });
  });

  it('should be created', inject([PostsDaoService], (service: PostsDaoService) => {
    expect(service).toBeTruthy();
  }));
});
