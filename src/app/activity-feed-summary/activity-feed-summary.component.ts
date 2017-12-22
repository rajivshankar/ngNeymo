import { Component, OnInit } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';
import { NeymoDataService } from '../neymo-data.service';
import { ActivityFeedRecord } from '../neymoMetaData';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-activity-feed-summary',
  templateUrl: './activity-feed-summary.component.html',
  styleUrls: ['./activity-feed-summary.component.css']
})
export class ActivityFeedSummaryComponent implements OnInit {

  private activityFeed: ActivityFeedRecord[];
  public carouselBanner: NgxCarousel;

  constructor(
    private neymoDataService: NeymoDataService,
    private utilsService: UtilsService,
  ) { }

  ngOnInit() {
    this.getActivityFeed();

    this.carouselBanner = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 5px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            border: 2px solid rgba(0, 0, 0, 0.55);
            padding: 4px;
            margin: 0 3px;
            transition-timing-function: cubic-bezier(.17, .67, .83, .67);
            transition: .4s;
          }
          .ngxcarouselPoint li.active {
              background: #6b6b6b;
              transform: scale(1.2);
          }
        `
      },
      load: 1,
      loop: true,
      touch: true,
      easing: 'ease',
    };
  }

  getActivityFeed(): void {
    this.neymoDataService.getActivityFeed()
      .subscribe(activityFeed => this.activityFeed = activityFeed);
  }

  /* It will be triggered on every slide*/
  onmoveFn(data: NgxCarouselStore) {
    // console.log(data);
  }
}
