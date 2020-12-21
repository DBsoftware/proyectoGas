import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrClientesComponent } from './pqr-clientes.component';

describe('PqrClientesComponent', () => {
  let component: PqrClientesComponent;
  let fixture: ComponentFixture<PqrClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PqrClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PqrClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
