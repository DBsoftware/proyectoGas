import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAccountClientesComponent } from './active-account-clientes.component';

describe('ActiveAccountClientesComponent', () => {
  let component: ActiveAccountClientesComponent;
  let fixture: ComponentFixture<ActiveAccountClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveAccountClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveAccountClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
