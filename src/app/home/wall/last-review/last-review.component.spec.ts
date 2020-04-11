import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastReviewComponent } from './last-review.component';

describe('LastReviewComponent', () => {
  let component: LastReviewComponent;
  let fixture: ComponentFixture<LastReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
