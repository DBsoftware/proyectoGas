import { TestBed, async, inject } from '@angular/core/testing';

import { ForgetPasswordProveedoresGuard } from './forget-password-proveedores.guard';

describe('ForgetPasswordProveedoresGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgetPasswordProveedoresGuard]
    });
  });

  it('should ...', inject([ForgetPasswordProveedoresGuard], (guard: ForgetPasswordProveedoresGuard) => {
    expect(guard).toBeTruthy();
  }));
});
