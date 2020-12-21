import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordFormClientesComponent } from './forget-password-form-clientes.component';

describe('ForgetPasswordFormClientesComponent', () => {
  let component: ForgetPasswordFormClientesComponent;
  let fixture: ComponentFixture<ForgetPasswordFormClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPasswordFormClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordFormClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
