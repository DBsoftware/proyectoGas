import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioResiduosEspecialesNocompactablesClientesComponent } from './bio-residuos-especiales-nocompactables-clientes.component';

describe('BioResiduosEspecialesNocompactablesClientesComponent', () => {
  let component: BioResiduosEspecialesNocompactablesClientesComponent;
  let fixture: ComponentFixture<BioResiduosEspecialesNocompactablesClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioResiduosEspecialesNocompactablesClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioResiduosEspecialesNocompactablesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
