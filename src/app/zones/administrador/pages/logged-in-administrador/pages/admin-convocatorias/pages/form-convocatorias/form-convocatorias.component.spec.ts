import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConvocatoriasComponent } from './form-convocatorias.component';

describe('FormConvocatoriasComponent', () => {
  let component: FormConvocatoriasComponent;
  let fixture: ComponentFixture<FormConvocatoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConvocatoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConvocatoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
