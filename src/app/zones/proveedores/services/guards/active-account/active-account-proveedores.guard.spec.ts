import { TestBed, async, inject } from '@angular/core/testing';

import { ActiveAccountProveedoresGuard } from './active-account-proveedores.guard';

describe('ActiveAccountProveedoresGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveAccountProveedoresGuard]
    });
  });

  it('should ...', inject([ActiveAccountProveedoresGuard], (guard: ActiveAccountProveedoresGuard) => {
    expect(guard).toBeTruthy();
  }));
});
