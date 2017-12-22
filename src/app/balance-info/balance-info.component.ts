import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-balance-info',
  templateUrl: './balance-info.component.html',
  styleUrls: ['./balance-info.component.css']
})
export class BalanceInfoComponent implements OnInit {

  constructor(
    private location: Location,
    private utilsService: UtilsService,
  ) { }

  ngOnInit() {
    this.utilsService.setLocation(this.location);
  }

  goBack(): void {
    this.location.back();
  }

}
