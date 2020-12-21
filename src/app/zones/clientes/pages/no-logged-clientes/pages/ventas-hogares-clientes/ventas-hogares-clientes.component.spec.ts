import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasHogaresClientesComponent } from './ventas-hogares-clientes.component';

describe('VentasHogaresClientesComponent', () => {
  let component: VentasHogaresClientesComponent;
  let fixture: ComponentFixture<VentasHogaresClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasHogaresClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasHogaresClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
