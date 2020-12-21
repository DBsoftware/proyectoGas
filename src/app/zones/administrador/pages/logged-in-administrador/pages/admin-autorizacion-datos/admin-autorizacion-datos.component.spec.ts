import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAutorizacionDatosComponent } from './admin-autorizacion-datos.component';

describe('AdminAutorizacionDatosComponent', () => {
  let component: AdminAutorizacionDatosComponent;
  let fixture: ComponentFixture<AdminAutorizacionDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAutorizacionDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAutorizacionDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
