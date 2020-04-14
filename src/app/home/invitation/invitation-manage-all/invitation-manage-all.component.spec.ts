import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationManageAllComponent } from './invitation-manage-all.component';

describe('InvitationManageAllComponent', () => {
  let component: InvitationManageAllComponent;
  let fixture: ComponentFixture<InvitationManageAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationManageAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationManageAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
