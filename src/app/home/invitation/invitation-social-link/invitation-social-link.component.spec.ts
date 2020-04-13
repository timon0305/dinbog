import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationSocialLinkComponent } from './invitation-social-link.component';

describe('InvitationSocialLinkComponent', () => {
  let component: InvitationSocialLinkComponent;
  let fixture: ComponentFixture<InvitationSocialLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationSocialLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationSocialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
