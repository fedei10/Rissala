import { TestBed } from '@angular/core/testing';

import { AuthloginService } from './authlogin.service';

describe('AuthloginService', () => {
  let service: AuthloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
