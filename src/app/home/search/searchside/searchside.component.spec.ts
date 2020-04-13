import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsideComponent } from './searchside.component';

describe('SearchsideComponent', () => {
  let component: SearchsideComponent;
  let fixture: ComponentFixture<SearchsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
