import { TestBed } from '@angular/core/testing';

import { ApiUserDetailService } from './api-user-detail.service';

describe('ApiUserDetailService', () => {
  let service: ApiUserDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiUserDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
