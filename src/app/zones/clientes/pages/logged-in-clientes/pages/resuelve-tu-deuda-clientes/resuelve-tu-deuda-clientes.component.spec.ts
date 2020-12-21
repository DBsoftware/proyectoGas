import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuelveTuDeudaClientesComponent } from './resuelve-tu-deuda-clientes.component';

describe('ResuelveTuDeudaClientesComponent', () => {
  let component: ResuelveTuDeudaClientesComponent;
  let fixture: ComponentFixture<ResuelveTuDeudaClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResuelveTuDeudaClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResuelveTuDeudaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
