import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionProyectoClientesComponent } from './informacion-proyecto-clientes.component';

describe('InformacionProyectoClientesComponent', () => {
  let component: InformacionProyectoClientesComponent;
  let fixture: ComponentFixture<InformacionProyectoClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionProyectoClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionProyectoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
