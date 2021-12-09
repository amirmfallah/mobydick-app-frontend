import { TestBed } from '@angular/core/testing';

import { SearchpageService } from './searchpage.service';

describe('SearchpageService', () => {
  let service: SearchpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
