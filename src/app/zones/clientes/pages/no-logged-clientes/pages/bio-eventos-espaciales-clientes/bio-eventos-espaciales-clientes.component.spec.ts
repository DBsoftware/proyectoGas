import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioEventosEspacialesClientesComponent } from './bio-eventos-espaciales-clientes.component';

describe('BioEventosEspacialesClientesComponent', () => {
  let component: BioEventosEspacialesClientesComponent;
  let fixture: ComponentFixture<BioEventosEspacialesClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioEventosEspacialesClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioEventosEspacialesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
