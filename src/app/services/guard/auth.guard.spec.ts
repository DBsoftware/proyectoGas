import { TestBed, async, inject } from '@angular/core/testing';

import { AuthLoggedInGuard } from './auth-logged-in.guard';

describe('AuthLoggedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthLoggedInGuard]
    });
  });

  it('should ...', inject([AuthLoggedInGuard], (guard: AuthLoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
