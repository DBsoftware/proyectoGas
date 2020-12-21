import { TestBed, inject } from '@angular/core/testing';

import { AuthZonesService } from './auth-zones.service';

describe('AuthZonesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthZonesService]
    });
  });

  it('should be created', inject([AuthZonesService], (service: AuthZonesService) => {
    expect(service).toBeTruthy();
  }));
});
