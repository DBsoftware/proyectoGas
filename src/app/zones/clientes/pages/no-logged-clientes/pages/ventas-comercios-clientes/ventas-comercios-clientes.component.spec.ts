import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasComerciosClientesComponent } from './ventas-comercios-clientes.component';

describe('VentasComerciosClientesComponent', () => {
  let component: VentasComerciosClientesComponent;
  let fixture: ComponentFixture<VentasComerciosClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasComerciosClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasComerciosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
