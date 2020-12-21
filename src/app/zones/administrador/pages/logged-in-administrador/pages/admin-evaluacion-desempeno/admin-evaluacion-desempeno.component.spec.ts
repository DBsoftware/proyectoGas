import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEvaluacionDesempenoComponent } from './admin-evaluacion-desempeno.component';

describe('AdminEvaluacionDesempenoComponent', () => {
  let component: AdminEvaluacionDesempenoComponent;
  let fixture: ComponentFixture<AdminEvaluacionDesempenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEvaluacionDesempenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEvaluacionDesempenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
