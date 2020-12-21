import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaudadoresClientesMapViewerComponent } from './recaudadores-clientes-map-viewer.component';

describe('RecaudadoresClientesMapViewerComponent', () => {
  let component: RecaudadoresClientesMapViewerComponent;
  let fixture: ComponentFixture<RecaudadoresClientesMapViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecaudadoresClientesMapViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecaudadoresClientesMapViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
