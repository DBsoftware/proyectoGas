import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordFormColaboradoresComponent } from './reset-password-form-colaboradores.component';

describe('ResetPasswordFormColaboradoresComponent', () => {
  let component: ResetPasswordFormColaboradoresComponent;
  let fixture: ComponentFixture<ResetPasswordFormColaboradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordFormColaboradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordFormColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
