import { TestBed, inject } from '@angular/core/testing';

import { CurrentPoliticService } from './current-politic.service';

describe('CurrentPoliticService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentPoliticService]
    });
  });

  it('should be created', inject([CurrentPoliticService], (service: CurrentPoliticService) => {
    expect(service).toBeTruthy();
  }));
});
