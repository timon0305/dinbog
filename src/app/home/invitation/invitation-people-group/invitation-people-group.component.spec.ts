import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationPeopleGroupComponent } from './invitation-people-group.component';

describe('InvitationPeopleGroupComponent', () => {
  let component: InvitationPeopleGroupComponent;
  let fixture: ComponentFixture<InvitationPeopleGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationPeopleGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationPeopleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
