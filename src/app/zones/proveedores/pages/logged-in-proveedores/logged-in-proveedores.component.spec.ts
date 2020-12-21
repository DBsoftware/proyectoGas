import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInProveedoresComponent } from './logged-in-proveedores.component';

describe('LoggedInProveedoresComponent', () => {
  let component: LoggedInProveedoresComponent;
  let fixture: ComponentFixture<LoggedInProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
