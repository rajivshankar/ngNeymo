import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFeedSummaryComponent } from './activity-feed-summary.component';

describe('ActivityFeedSummaryComponent', () => {
  let component: ActivityFeedSummaryComponent;
  let fixture: ComponentFixture<ActivityFeedSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityFeedSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFeedSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
