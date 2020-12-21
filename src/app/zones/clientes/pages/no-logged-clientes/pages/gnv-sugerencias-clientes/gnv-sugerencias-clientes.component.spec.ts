import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnvSugerenciasClientesComponent } from './gnv-sugerencias-clientes.component';

describe('GnvSugerenciasClientesComponent', () => {
  let component: GnvSugerenciasClientesComponent;
  let fixture: ComponentFixture<GnvSugerenciasClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnvSugerenciasClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnvSugerenciasClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
