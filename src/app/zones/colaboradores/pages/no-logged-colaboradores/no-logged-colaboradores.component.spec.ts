import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoggedColaboradoresComponent } from './no-logged-colaboradores.component';

describe('NoLoggedColaboradoresComponent', () => {
  let component: NoLoggedColaboradoresComponent;
  let fixture: ComponentFixture<NoLoggedColaboradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLoggedColaboradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoggedColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
