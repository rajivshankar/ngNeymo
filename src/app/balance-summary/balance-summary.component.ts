import { Component, OnInit } from '@angular/core';
import { NeymoDataService } from '../neymo-data.service';
import { BalanceSummaryRecord } from '../neymoMetaData';
import { UtilsService } from '../utils.service';

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
    this.neymoDataService.getBalanceSummary()
      .subscribe(balanceSummary => this.balanceSummary = balanceSummary);
  }

}
