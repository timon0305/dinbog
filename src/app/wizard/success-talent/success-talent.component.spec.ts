import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessTalentComponent } from './success-talent.component';

describe('SuccessTalentComponent', () => {
  let component: SuccessTalentComponent;
  let fixture: ComponentFixture<SuccessTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
