import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionFinancieraComponent } from './clasificacion-financiera.component';

describe('ClasificacionFinancieraComponent', () => {
  let component: ClasificacionFinancieraComponent;
  let fixture: ComponentFixture<ClasificacionFinancieraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificacionFinancieraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificacionFinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
