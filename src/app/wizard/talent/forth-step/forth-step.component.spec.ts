import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthStepComponent } from './forth-step.component';

describe('ForthStepComponent', () => {
  let component: ForthStepComponent;
  let fixture: ComponentFixture<ForthStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForthStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
