import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesModalComponent } from './likes-modal.component';

describe('LikesModalComponent', () => {
  let component: LikesModalComponent;
  let fixture: ComponentFixture<LikesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
