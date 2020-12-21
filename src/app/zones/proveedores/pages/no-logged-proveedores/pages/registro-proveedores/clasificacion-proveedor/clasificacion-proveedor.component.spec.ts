import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionProveedorComponent } from './clasificacion-proveedor.component';

describe('ClasificacionProveedorComponent', () => {
  let component: ClasificacionProveedorComponent;
  let fixture: ComponentFixture<ClasificacionProveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificacionProveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificacionProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
