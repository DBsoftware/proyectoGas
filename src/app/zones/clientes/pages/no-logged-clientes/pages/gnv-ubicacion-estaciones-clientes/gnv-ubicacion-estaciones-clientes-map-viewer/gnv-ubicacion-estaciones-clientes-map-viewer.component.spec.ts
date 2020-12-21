import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnvUbicacionEstacionesClientesMapViewerComponent } from './gnv-ubicacion-estaciones-clientes-map-viewer.component';

describe('GnvUbicacionEstacionesClientesMapViewerComponent', () => {
  let component: GnvUbicacionEstacionesClientesMapViewerComponent;
  let fixture: ComponentFixture<GnvUbicacionEstacionesClientesMapViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnvUbicacionEstacionesClientesMapViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnvUbicacionEstacionesClientesMapViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
