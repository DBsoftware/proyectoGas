import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableConsultasFechasVencimientoComponent } from './datatable-consultas-fechas-vencimiento.component';

describe('DatatableConsultasFechasVencimientoComponent', () => {
  let component: DatatableConsultasFechasVencimientoComponent;
  let fixture: ComponentFixture<DatatableConsultasFechasVencimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableConsultasFechasVencimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableConsultasFechasVencimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
