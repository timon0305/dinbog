import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualSearchTalentsComponent } from './contextual-search-talents.component';

describe('ContextualSearchTalentsComponent', () => {
  let component: ContextualSearchTalentsComponent;
  let fixture: ComponentFixture<ContextualSearchTalentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextualSearchTalentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextualSearchTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
