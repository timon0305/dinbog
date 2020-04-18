import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBusinessPagesComponent } from './profile-business-pages.component';

describe('ProfileBusinessPagesComponent', () => {
  let component: ProfileBusinessPagesComponent;
  let fixture: ComponentFixture<ProfileBusinessPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileBusinessPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBusinessPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
