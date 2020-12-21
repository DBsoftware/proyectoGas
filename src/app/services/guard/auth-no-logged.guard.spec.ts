import { TestBed, async, inject } from '@angular/core/testing';

import { AuthNoLoggedGuard } from './auth-no-logged.guard';

describe('AuthNoLoggedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthNoLoggedGuard]
    });
  });

  it('should ...', inject([AuthNoLoggedGuard], (guard: AuthNoLoggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
