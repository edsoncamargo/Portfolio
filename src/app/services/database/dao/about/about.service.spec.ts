import { TestBed, inject } from '@angular/core/testing';

import { AboutDaoService } from './about-dao.service';

describe('AboutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutDaoService]
    });
  });

  it('should be created', inject([AboutDaoService], (service: AboutDaoService) => {
    expect(service).toBeTruthy();
  }));
});
