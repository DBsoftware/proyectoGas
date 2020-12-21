import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrerClientesComponent } from './registrer-clientes.component';

describe('RegistrerClientesComponent', () => {
  let component: RegistrerClientesComponent;
  let fixture: ComponentFixture<RegistrerClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrerClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrerClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
