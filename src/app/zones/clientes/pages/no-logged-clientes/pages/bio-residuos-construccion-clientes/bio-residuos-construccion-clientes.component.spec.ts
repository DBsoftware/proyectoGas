import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioResiduosConstruccionClientesComponent } from './bio-residuos-construccion-clientes.component';

describe('BioResiduosConstruccionClientesComponent', () => {
  let component: BioResiduosConstruccionClientesComponent;
  let fixture: ComponentFixture<BioResiduosConstruccionClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioResiduosConstruccionClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioResiduosConstruccionClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
