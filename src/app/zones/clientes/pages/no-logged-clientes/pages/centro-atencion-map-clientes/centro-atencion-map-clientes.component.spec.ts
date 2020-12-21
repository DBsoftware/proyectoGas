import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAtencionMapClientesComponent } from './centro-atencion-map-clientes.component';

describe('CentroAtencionMapClientesComponent', () => {
  let component: CentroAtencionMapClientesComponent;
  let fixture: ComponentFixture<CentroAtencionMapClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAtencionMapClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAtencionMapClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
