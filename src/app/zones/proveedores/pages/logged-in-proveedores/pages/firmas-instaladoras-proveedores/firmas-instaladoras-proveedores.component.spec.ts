import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmasInstaladorasProveedoresComponent } from './firmas-instaladoras-proveedores.component';

describe('FirmasInstaladorasProveedoresComponent', () => {
  let component: FirmasInstaladorasProveedoresComponent;
  let fixture: ComponentFixture<FirmasInstaladorasProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmasInstaladorasProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmasInstaladorasProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
