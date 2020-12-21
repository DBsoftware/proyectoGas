import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionDesempenoProveedoresComponent } from './evaluacion-desempeno-proveedores.component';

describe('EvaluacionDesempenoProveedoresComponent', () => {
  let component: EvaluacionDesempenoProveedoresComponent;
  let fixture: ComponentFixture<EvaluacionDesempenoProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionDesempenoProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionDesempenoProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
