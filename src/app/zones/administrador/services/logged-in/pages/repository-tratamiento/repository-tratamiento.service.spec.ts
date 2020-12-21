import {TestBed, inject, getTestBed} from '@angular/core/testing';

import { RepositoryTratamientoService } from './repository-tratamiento.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {MockTratamientoData} from './mock-tratamiento-data';

describe('RepositoryTratamientoService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RepositoryTratamientoService]
    });
  });

  it('should be created', inject([RepositoryTratamientoService], (service: RepositoryTratamientoService) => {
    expect(service).toBeTruthy();
  }));

  it('expects service to fetch data with proper sorting',
    inject([HttpTestingController, RepositoryTratamientoService],
      (httpMock: HttpTestingController, service: RepositoryTratamientoService) => {
        // We call the service
  /*      service.getTratamientoData()
          .subscribe(data => {
          expect(data).toBe(3);
            expect(data).toEqual(MockTratamientoData.TratamientoData);
        });*/
        // We set the expectations for the HttpClient mock
/*        const req = httpMock.expectOne({url: service.url})
          .flush({
            data: MockTratamientoData.TratamientoData
          });*/
        // Then we set the fake data to be returned by the mock
/*
        req.flush(MockTratamientoData.TratamientoData);
*/
      })
  );


});
