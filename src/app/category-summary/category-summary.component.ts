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
    this.neymoDataService.getCategorySummary()
      .subscribe(categorySummary => this.categorySummary = categorySummary);
  }

}
