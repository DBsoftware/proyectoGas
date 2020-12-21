import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnvUbicacionEstacionesClientesDatatableComponent } from './gnv-ubicacion-estaciones-clientes-datatable.component';

describe('GnvUbicacionEstacionesClientesDatatableComponent', () => {
  let component: GnvUbicacionEstacionesClientesDatatableComponent;
  let fixture: ComponentFixture<GnvUbicacionEstacionesClientesDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnvUbicacionEstacionesClientesDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnvUbicacionEstacionesClientesDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
