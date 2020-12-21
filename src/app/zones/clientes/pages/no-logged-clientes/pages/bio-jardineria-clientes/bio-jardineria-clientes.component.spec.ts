import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioJardineriaClientesComponent } from './bio-jardineria-clientes.component';

describe('BioJardineriaClientesComponent', () => {
  let component: BioJardineriaClientesComponent;
  let fixture: ComponentFixture<BioJardineriaClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioJardineriaClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioJardineriaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
