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
    this.neymoDataService.getBackendData(this.neymoDataService.vendorSummaryUrl, true)
      .subscribe(vendorSummary => {
        console.log('Vendor Summary = ' + JSON.stringify(vendorSummary['results'][0].data.slice(0, 3)));
        this.vendorSummary = vendorSummary['results'][0].data.slice(0, 3);
      });
  }

}
