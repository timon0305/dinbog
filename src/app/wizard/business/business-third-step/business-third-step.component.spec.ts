import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessThirdStepComponent } from './business-third-step.component';

describe('BusinessThirdStepComponent', () => {
  let component: BusinessThirdStepComponent;
  let fixture: ComponentFixture<BusinessThirdStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessThirdStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessThirdStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
