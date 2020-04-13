import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationAdvertiseComponent } from './invitation-advertise.component';

describe('InvitationAdvertiseComponent', () => {
  let component: InvitationAdvertiseComponent;
  let fixture: ComponentFixture<InvitationAdvertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationAdvertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationAdvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
