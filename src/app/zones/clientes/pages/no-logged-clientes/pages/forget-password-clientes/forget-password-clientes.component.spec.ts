import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordClientesComponent } from './forget-password-clientes.component';

describe('ForgetPasswordClientesComponent', () => {
  let component: ForgetPasswordClientesComponent;
  let fixture: ComponentFixture<ForgetPasswordClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPasswordClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
