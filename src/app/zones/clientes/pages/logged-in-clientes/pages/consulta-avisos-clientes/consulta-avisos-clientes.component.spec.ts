import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAvisosClientesComponent } from './consulta-avisos-clientes.component';

describe('ConsultaAvisosClientesComponent', () => {
  let component: ConsultaAvisosClientesComponent;
  let fixture: ComponentFixture<ConsultaAvisosClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaAvisosClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAvisosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
