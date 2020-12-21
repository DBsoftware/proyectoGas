import { TestBed, inject } from '@angular/core/testing';

import { ReporteFugasService } from './reporte-fugas.service';

describe('ReporteFugasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReporteFugasService]
    });
  });

  it('should be created', inject([ReporteFugasService], (service: ReporteFugasService) => {
    expect(service).toBeTruthy();
  }));
});
