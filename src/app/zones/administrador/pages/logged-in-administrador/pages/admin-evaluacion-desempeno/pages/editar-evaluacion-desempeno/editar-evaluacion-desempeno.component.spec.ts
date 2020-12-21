import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEvaluacionDesempenoComponent } from './editar-evaluacion-desempeno.component';

describe('EditarEvaluacionDesempenoComponent', () => {
  let component: EditarEvaluacionDesempenoComponent;
  let fixture: ComponentFixture<EditarEvaluacionDesempenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEvaluacionDesempenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEvaluacionDesempenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
