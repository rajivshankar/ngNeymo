import { Component, OnInit } from '@angular/core';
import { NeymoDataService } from '../neymo-data.service';
import { CategorySummaryRecord } from '../neymoMetaData';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-category-summary',
  templateUrl: './category-summary.component.html',
  styleUrls: ['./category-summary.component.css']
})
export class CategorySummaryComponent implements OnInit {

  private categorySummary: CategorySummaryRecord[];

  constructor(
    private neymoDataService: NeymoDataService,
    private utilsService: UtilsService,
  ) { }

  ngOnInit() {
    this.getCategorySummary();
  }

  getCategoryIcon(name: string): string {
    return this.utilsService.getCategoryIcon(name);
  }

  getCategoryColor(name: string): string {
    return this.utilsService.getCategoryColor(name);
  }

  getCategorySummary(): void {
    this.neymoDataService.getBackendData(this.neymoDataService.categorySummaryUrl, true)
      .subscribe(categorySummary => {
        // console.log('Category Summary = ' + JSON.stringify(categorySummary['results'][0].data.slice(0, 3)));
        this.categorySummary = categorySummary['results'][0].data.slice(0, 3);
      });
  }

}
