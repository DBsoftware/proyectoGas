import { TestBed, inject } from '@angular/core/testing';

import { ExpansionRedesService } from './expansion-redes.service';

describe('ExpansionRedesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpansionRedesService]
    });
  });

  it('should be created', inject([ExpansionRedesService], (service: ExpansionRedesService) => {
    expect(service).toBeTruthy();
  }));
});
