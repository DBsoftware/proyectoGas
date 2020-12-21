import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoDeFinanciacionClientesComponent } from './estado-de-financiacion-clientes.component';

describe('EstadoDeFinanciacionClientesComponent', () => {
  let component: EstadoDeFinanciacionClientesComponent;
  let fixture: ComponentFixture<EstadoDeFinanciacionClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoDeFinanciacionClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoDeFinanciacionClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
