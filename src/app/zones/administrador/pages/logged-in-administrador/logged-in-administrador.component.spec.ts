import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInAdministradorComponent } from './logged-in-administrador.component';

describe('LoggedInAdministradorComponent', () => {
  let component: LoggedInAdministradorComponent;
  let fixture: ComponentFixture<LoggedInAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
