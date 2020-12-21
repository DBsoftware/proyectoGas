import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegisterProveedoresComponent } from './modal-register-proveedores.component';

describe('ModalRegisterProveedoresComponent', () => {
  let component: ModalRegisterProveedoresComponent;
  let fixture: ComponentFixture<ModalRegisterProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRegisterProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRegisterProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
