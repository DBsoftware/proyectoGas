import { TestBed, async, inject } from '@angular/core/testing';

import { ActiveAccountColaboradoresGuard } from './active-account-colaboradores.guard';

describe('ActiveAccountColaboradoresGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveAccountColaboradoresGuard]
    });
  });

  it('should ...', inject([ActiveAccountColaboradoresGuard], (guard: ActiveAccountColaboradoresGuard) => {
    expect(guard).toBeTruthy();
  }));
});
