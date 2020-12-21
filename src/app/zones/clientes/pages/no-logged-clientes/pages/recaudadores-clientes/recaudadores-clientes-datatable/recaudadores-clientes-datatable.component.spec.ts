import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaudadoresClientesDatatableComponent } from './recaudadores-clientes-datatable.component';

describe('RecaudadoresClientesDatatableComponent', () => {
  let component: RecaudadoresClientesDatatableComponent;
  let fixture: ComponentFixture<RecaudadoresClientesDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecaudadoresClientesDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecaudadoresClientesDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
