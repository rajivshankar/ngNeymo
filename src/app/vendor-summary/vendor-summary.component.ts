import { Component, OnInit } from '@angular/core';
import { NeymoDataService } from '../neymo-data.service';
import { VendorSummaryRecord } from '../neymoMetaData';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-vendor-summary',
  templateUrl: './vendor-summary.component.html',
  styleUrls: ['./vendor-summary.component.css']
})
export class VendorSummaryComponent implements OnInit {

  private vendorSummary: VendorSummaryRecord[];

  constructor(
    private neymoDataService: NeymoDataService,
    private utilsService: UtilsService,

  ) { }

  ngOnInit() {
    this.getVendorSummary();
  }

  getCategoryIcon(name: string): string {
    return this.utilsService.getCategoryIcon(name);
  }

  getCategoryColor(name: string): string {
    return this.utilsService.getCategoryColor(name);
  }

  getVendorSummary(): void {
    this.neymoDataService.getVendorSummary()
      .subscribe(vendorSummary => this.vendorSummary = vendorSummary);
  }

}
