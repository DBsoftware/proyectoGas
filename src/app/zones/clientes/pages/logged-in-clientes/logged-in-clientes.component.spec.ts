import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInClientesComponent } from './logged-in-clientes.component';

describe('LoggedInClientesComponent', () => {
  let component: LoggedInClientesComponent;
  let fixture: ComponentFixture<LoggedInClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
