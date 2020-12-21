import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandesClientesComponent } from './grandes-clientes.component';

describe('GrandesClientesComponent', () => {
  let component: GrandesClientesComponent;
  let fixture: ComponentFixture<GrandesClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandesClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
