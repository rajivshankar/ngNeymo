import { Component, OnInit } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';

@Component({
  selector: 'app-activity-feed-summary',
  templateUrl: './activity-feed-summary.component.html',
  styleUrls: ['./activity-feed-summary.component.css']
})
export class ActivityFeedSummaryComponent implements OnInit {

  public carouselTileItems: Array<any>;
  public carouselBanner: NgxCarousel;

  constructor() { }

  ngOnInit() {
    // this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.carouselTileItems = [
      { 'title': 'ActivityFeed 1', 'summary': 'This is activity Feed 1. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ...' },
      { 'title': 'ActivityFeed 2', 'summary': 'This is activity Feed 2. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ...' },
      { 'title': 'ActivityFeed 3', 'summary': 'This is activity Feed 3. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ...' },
      { 'title': 'ActivityFeed 4', 'summary': 'This is activity Feed 4. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ...' },
      { 'title': 'ActivityFeed 5', 'summary': 'This is activity Feed 5. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ...' },
    ];

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
    }
  }

  /* It will be triggered on every slide*/
  onmoveFn(data: NgxCarouselStore) {
    // console.log(data);
  }
}
