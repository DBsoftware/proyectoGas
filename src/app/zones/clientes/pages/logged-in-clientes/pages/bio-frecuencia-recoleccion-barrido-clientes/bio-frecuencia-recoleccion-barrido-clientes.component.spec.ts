import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioFrecuenciaRecoleccionBarridoClientesComponent } from './bio-frecuencia-recoleccion-barrido-clientes.component';

describe('BioFrecuenciaRecoleccionBarridoClientesComponent', () => {
  let component: BioFrecuenciaRecoleccionBarridoClientesComponent;
  let fixture: ComponentFixture<BioFrecuenciaRecoleccionBarridoClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioFrecuenciaRecoleccionBarridoClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioFrecuenciaRecoleccionBarridoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
