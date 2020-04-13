import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationModelComponent } from './invitation-model.component';

describe('InvitationModelComponent', () => {
  let component: InvitationModelComponent;
  let fixture: ComponentFixture<InvitationModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
