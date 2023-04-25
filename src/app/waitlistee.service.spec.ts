import { TestBed } from '@angular/core/testing';

import { WaitlisteeService } from './waitlistee.service';

describe('WaitlisteeService', () => {
  let service: WaitlisteeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitlisteeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
