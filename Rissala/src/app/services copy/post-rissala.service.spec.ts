import { TestBed } from '@angular/core/testing';

import { PostRissalaService } from './post-rissala.service';

describe('PostRissalaService', () => {
  let service: PostRissalaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostRissalaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
