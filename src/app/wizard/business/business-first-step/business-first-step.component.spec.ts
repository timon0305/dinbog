import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFirstStepComponent } from './business-first-step.component';

describe('BusinessFirstStepComponent', () => {
  let component: BusinessFirstStepComponent;
  let fixture: ComponentFixture<BusinessFirstStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessFirstStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessFirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
