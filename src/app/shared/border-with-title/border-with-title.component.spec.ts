import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderWithTitleComponent } from './border-with-title.component';

describe('BorderWithTitleComponent', () => {
  let component: BorderWithTitleComponent;
  let fixture: ComponentFixture<BorderWithTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderWithTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderWithTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
