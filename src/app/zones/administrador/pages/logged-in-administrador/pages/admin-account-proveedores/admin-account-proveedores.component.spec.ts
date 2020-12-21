import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountProveedoresComponent } from './admin-account-proveedores.component';

describe('AdminAccountProveedoresComponent', () => {
  let component: AdminAccountProveedoresComponent;
  let fixture: ComponentFixture<AdminAccountProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAccountProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccountProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
