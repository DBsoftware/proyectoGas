import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordProveedoresFormComponent } from './forget-password-proveedores-form.component';

describe('ForgetPasswordProveedoresFormComponent', () => {
  let component: ForgetPasswordProveedoresFormComponent;
  let fixture: ComponentFixture<ForgetPasswordProveedoresFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPasswordProveedoresFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordProveedoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
