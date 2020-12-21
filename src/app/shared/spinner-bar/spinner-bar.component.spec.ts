import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerBarComponent } from './spinner-bar.component';

describe('SpinnerBarComponent', () => {
  let component: SpinnerBarComponent;
  let fixture: ComponentFixture<SpinnerBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
