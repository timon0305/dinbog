import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualSearchComponent } from './contextual-search.component';

describe('ContextualSearchComponent', () => {
  let component: ContextualSearchComponent;
  let fixture: ComponentFixture<ContextualSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextualSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextualSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
