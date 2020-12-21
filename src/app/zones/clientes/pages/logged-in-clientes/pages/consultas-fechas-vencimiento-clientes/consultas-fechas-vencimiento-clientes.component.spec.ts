import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasFechasVencimientoClientesComponent } from './consultas-fechas-vencimiento-clientes.component';

describe('ConsultasFechasVencimientoClientesComponent', () => {
  let component: ConsultasFechasVencimientoClientesComponent;
  let fixture: ComponentFixture<ConsultasFechasVencimientoClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasFechasVencimientoClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasFechasVencimientoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
