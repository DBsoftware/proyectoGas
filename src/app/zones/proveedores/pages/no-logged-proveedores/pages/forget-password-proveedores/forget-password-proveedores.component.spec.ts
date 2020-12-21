import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordProveedoresComponent } from './forget-password-proveedores.component';

describe('ForgetPasswordProveedoresComponent', () => {
  let component: ForgetPasswordProveedoresComponent;
  let fixture: ComponentFixture<ForgetPasswordProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPasswordProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
