import { TestBed, inject } from '@angular/core/testing';

import { ConsultarFechasDeVencimientoClientesService } from './consultar-fechas-de-vencimiento-clientes.service';

describe('ConsultarFechasDeVencimientoClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultarFechasDeVencimientoClientesService]
    });
  });

  it('should be created', inject([ConsultarFechasDeVencimientoClientesService], (service: ConsultarFechasDeVencimientoClientesService) => {
    expect(service).toBeTruthy();
  }));
});
