import { TestBed } from '@angular/core/testing';

import { CocinabarService } from './cocinabar.service';

describe('CocinabarService', () => {
  let service: CocinabarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocinabarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
