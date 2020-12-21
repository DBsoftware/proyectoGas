import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAccountColaboradoresComponent } from './active-account-colaboradores.component';

describe('ActiveAccountColaboradoresComponent', () => {
  let component: ActiveAccountColaboradoresComponent;
  let fixture: ComponentFixture<ActiveAccountColaboradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveAccountColaboradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveAccountColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
