import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnvUbicacionEstacionesClientesComponent } from './gnv-ubicacion-estaciones-clientes.component';

describe('GnvUbicacionEstacionesClientesComponent', () => {
  let component: GnvUbicacionEstacionesClientesComponent;
  let fixture: ComponentFixture<GnvUbicacionEstacionesClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnvUbicacionEstacionesClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnvUbicacionEstacionesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
