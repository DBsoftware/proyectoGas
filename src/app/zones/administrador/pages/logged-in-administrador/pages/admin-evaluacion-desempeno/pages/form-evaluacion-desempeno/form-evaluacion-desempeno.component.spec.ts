import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEvaluacionDesempenoComponent } from './form-evaluacion-desempeno.component';

describe('FormEvaluacionDesempenoComponent', () => {
  let component: FormEvaluacionDesempenoComponent;
  let fixture: ComponentFixture<FormEvaluacionDesempenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEvaluacionDesempenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEvaluacionDesempenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
