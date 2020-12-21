import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizacionTratamientoComponent } from './autorizacion-tratamiento.component';

describe('AutorizacionTratamientoComponent', () => {
  let component: AutorizacionTratamientoComponent;
  let fixture: ComponentFixture<AutorizacionTratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorizacionTratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizacionTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
