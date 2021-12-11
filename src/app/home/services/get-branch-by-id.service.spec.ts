import { TestBed } from '@angular/core/testing';

import { GetBranchByIdService } from './get-branch-by-id.service';

describe('GetBranchByIdService', () => {
  let service: GetBranchByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBranchByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
