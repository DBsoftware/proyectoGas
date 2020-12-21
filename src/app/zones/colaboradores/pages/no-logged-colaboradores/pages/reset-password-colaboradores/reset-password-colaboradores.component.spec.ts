import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordColaboradoresComponent } from './reset-password-colaboradores.component';

describe('ResetPasswordColaboradoresComponent', () => {
  let component: ResetPasswordColaboradoresComponent;
  let fixture: ComponentFixture<ResetPasswordColaboradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordColaboradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
