import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoggedClientesComponent } from './no-logged-clientes.component';

describe('NoLoggedClientesComponent', () => {
  let component: NoLoggedClientesComponent;
  let fixture: ComponentFixture<NoLoggedClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLoggedClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoggedClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
