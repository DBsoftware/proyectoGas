import { TestBed, async, inject } from '@angular/core/testing';

import { ActiveAccountUsuarioGuard } from './active-account-usuario.guard';

describe('ActiveAccountUsuarioGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveAccountUsuarioGuard]
    });
  });

  it('should ...', inject([ActiveAccountUsuarioGuard], (guard: ActiveAccountUsuarioGuard) => {
    expect(guard).toBeTruthy();
  }));
});
