import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSecondStepComponent } from './business-second-step.component';

describe('BusinessSecondStepComponent', () => {
  let component: BusinessSecondStepComponent;
  let fixture: ComponentFixture<BusinessSecondStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessSecondStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessSecondStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
