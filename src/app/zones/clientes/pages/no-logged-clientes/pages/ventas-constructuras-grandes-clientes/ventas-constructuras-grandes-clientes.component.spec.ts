import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasConstructurasGrandesClientesComponent } from './ventas-constructuras-grandes-clientes.component';

describe('VentasConstructurasGrandesClientesComponent', () => {
  let component: VentasConstructurasGrandesClientesComponent;
  let fixture: ComponentFixture<VentasConstructurasGrandesClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasConstructurasGrandesClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasConstructurasGrandesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
