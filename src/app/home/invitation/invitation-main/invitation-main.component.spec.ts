import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationMainComponent } from './invitation-main.component';

describe('InvitationMainComponent', () => {
  let component: InvitationMainComponent;
  let fixture: ComponentFixture<InvitationMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
