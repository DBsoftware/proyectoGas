import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriaProveedoresComponent } from './convocatoria-proveedores.component';

describe('ConvocatoriaProveedoresComponent', () => {
  let component: ConvocatoriaProveedoresComponent;
  let fixture: ComponentFixture<ConvocatoriaProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvocatoriaProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoriaProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
