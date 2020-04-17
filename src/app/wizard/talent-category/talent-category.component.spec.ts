import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentCategoryComponent } from './talent-category.component';

describe('TalentCategoryComponent', () => {
  let component: TalentCategoryComponent;
  let fixture: ComponentFixture<TalentCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
