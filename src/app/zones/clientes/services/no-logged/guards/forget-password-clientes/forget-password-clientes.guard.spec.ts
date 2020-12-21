import { TestBed, async, inject } from '@angular/core/testing';

import { ForgetPasswordClientesGuard } from './forget-password-clientes.guard';

describe('ForgetPasswordClientesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgetPasswordClientesGuard]
    });
  });

  it('should ...', inject([ForgetPasswordClientesGuard], (guard: ForgetPasswordClientesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
