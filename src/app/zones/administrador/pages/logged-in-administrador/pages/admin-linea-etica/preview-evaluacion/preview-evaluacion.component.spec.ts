import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewEvaluacionComponent } from './preview-evaluacion.component';

describe('PreviewEvaluacionComponent', () => {
  let component: PreviewEvaluacionComponent;
  let fixture: ComponentFixture<PreviewEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewEvaluacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
