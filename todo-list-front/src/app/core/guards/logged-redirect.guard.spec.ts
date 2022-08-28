import { TestBed } from '@angular/core/testing';

import { LoggedRedirectGuard } from './logged-redirect.guard';

describe('LoggedRedirectGuard', () => {
  let guard: LoggedRedirectGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedRedirectGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
