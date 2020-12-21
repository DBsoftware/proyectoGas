import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInColaboradoresComponent } from './logged-in-colaboradores.component';

describe('LoggedInColaboradoresComponent', () => {
  let component: LoggedInColaboradoresComponent;
  let fixture: ComponentFixture<LoggedInColaboradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInColaboradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
