import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioFrecuenciaRecoleccionBarridoClientesMapViewerComponent } from './bio-frecuencia-recoleccion-barrido-clientes-map-viewer.component';

describe('BioFrecuenciaRecoleccionBarridoClientesMapViewerComponent', () => {
  let component: BioFrecuenciaRecoleccionBarridoClientesMapViewerComponent;
  let fixture: ComponentFixture<BioFrecuenciaRecoleccionBarridoClientesMapViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioFrecuenciaRecoleccionBarridoClientesMapViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioFrecuenciaRecoleccionBarridoClientesMapViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
