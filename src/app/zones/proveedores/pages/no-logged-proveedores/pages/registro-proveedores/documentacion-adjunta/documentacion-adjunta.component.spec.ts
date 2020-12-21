import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentacionAdjuntaComponent } from './documentacion-adjunta.component';

describe('DocumentacionAdjuntaComponent', () => {
  let component: DocumentacionAdjuntaComponent;
  let fixture: ComponentFixture<DocumentacionAdjuntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentacionAdjuntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentacionAdjuntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
