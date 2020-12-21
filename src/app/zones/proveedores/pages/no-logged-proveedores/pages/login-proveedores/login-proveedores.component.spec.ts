import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginProveedoresComponent } from './login-proveedores.component';

describe('LoginProveedoresComponent', () => {
  let component: LoginProveedoresComponent;
  let fixture: ComponentFixture<LoginProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
