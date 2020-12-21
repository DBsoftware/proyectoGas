import { TestBed, async, inject } from '@angular/core/testing';

import { ForgetPasswordColaboradoresGuard } from './forget-password-colaboradores.guard';

describe('ForgetPasswordColaboradoresGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgetPasswordColaboradoresGuard]
    });
  });

  it('should ...', inject([ForgetPasswordColaboradoresGuard], (guard: ForgetPasswordColaboradoresGuard) => {
    expect(guard).toBeTruthy();
  }));
});
