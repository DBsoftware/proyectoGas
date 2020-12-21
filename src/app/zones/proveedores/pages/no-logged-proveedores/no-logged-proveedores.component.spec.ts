import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoggedProveedoresComponent } from './no-logged-proveedores.component';

describe('NoLoggedProveedoresComponent', () => {
  let component: NoLoggedProveedoresComponent;
  let fixture: ComponentFixture<NoLoggedProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLoggedProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoggedProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
