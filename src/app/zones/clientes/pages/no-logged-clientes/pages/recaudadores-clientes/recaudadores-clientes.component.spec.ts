import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaudadoresClientesComponent } from './recaudadores-clientes.component';

describe('RecaudadoresClientesComponent', () => {
  let component: RecaudadoresClientesComponent;
  let fixture: ComponentFixture<RecaudadoresClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecaudadoresClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecaudadoresClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
