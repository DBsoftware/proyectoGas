import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaEticaClientesComponent } from './linea-etica-clientes.component';

describe('LineaEticaClientesComponent', () => {
  let component: LineaEticaClientesComponent;
  let fixture: ComponentFixture<LineaEticaClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaEticaClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaEticaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
