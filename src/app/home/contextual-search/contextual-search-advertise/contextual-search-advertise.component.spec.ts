import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualSearchAdvertiseComponent } from './contextual-search-advertise.component';

describe('ContextualSearchAdvertiseComponent', () => {
  let component: ContextualSearchAdvertiseComponent;
  let fixture: ComponentFixture<ContextualSearchAdvertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextualSearchAdvertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextualSearchAdvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
