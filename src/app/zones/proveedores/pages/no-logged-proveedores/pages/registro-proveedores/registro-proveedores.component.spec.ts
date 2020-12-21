import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProveedoresComponent } from './registro-proveedores.component';

describe('RegistroProveedoresComponent', () => {
  let component: RegistroProveedoresComponent;
  let fixture: ComponentFixture<RegistroProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
