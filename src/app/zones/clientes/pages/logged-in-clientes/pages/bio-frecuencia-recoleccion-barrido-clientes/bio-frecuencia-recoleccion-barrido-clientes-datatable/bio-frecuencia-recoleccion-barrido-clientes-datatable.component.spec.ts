import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioFrecuenciaRecoleccionBarridoClientesDatatableComponent } from './bio-frecuencia-recoleccion-barrido-clientes-datatable.component';

describe('BioFrecuenciaRecoleccionBarridoClientesDatatableComponent', () => {
  let component: BioFrecuenciaRecoleccionBarridoClientesDatatableComponent;
  let fixture: ComponentFixture<BioFrecuenciaRecoleccionBarridoClientesDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioFrecuenciaRecoleccionBarridoClientesDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioFrecuenciaRecoleccionBarridoClientesDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
