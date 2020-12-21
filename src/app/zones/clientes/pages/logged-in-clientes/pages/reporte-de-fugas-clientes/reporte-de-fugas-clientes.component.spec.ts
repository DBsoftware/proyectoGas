import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDeFugasClientesComponent } from './reporte-de-fugas-clientes.component';

describe('ReporteDeFugasClientesComponent', () => {
  let component: ReporteDeFugasClientesComponent;
  let fixture: ComponentFixture<ReporteDeFugasClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteDeFugasClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDeFugasClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
