import { Component, OnInit } from '@angular/core';
import { NeymoDataService } from '../neymo-data.service';
import { BalanceSummaryRecord } from '../neymoMetaData';
import { UtilsService } from '../utils.service';
import { truncate } from 'fs';

@Component({
  selector: 'app-balance-summary',
  templateUrl: './balance-summary.component.html',
  styleUrls: ['./balance-summary.component.css']
})
export class BalanceSummaryComponent implements OnInit {

  private balanceSummary: BalanceSummaryRecord[];

  constructor(
    private neymoDataService: NeymoDataService,
    private utilsService: UtilsService,
  ) { }


  ngOnInit() {
    this.getBalanceSummary();
  }

  getAccountIcon(name: string): string {
    return this.utilsService.getAccountIcon(name);
  }

  getAccountTitle(name: string): string {
    return this.utilsService.getAccountTitle(name);
  }

  getBalanceSummary(): void {
    this.neymoDataService.getBackendData(this.neymoDataService.balanceSummaryUrl, true)
      .subscribe(report => {
        this.balanceSummary = report['results'][0].data;
        console.log('balance Summary length = ' + this.balanceSummary.length);
        console.log('balance Summary = ' + JSON.stringify(this.balanceSummary));
        // console.log('report = ' + JSON.stringify(report));
      });
  }

}
