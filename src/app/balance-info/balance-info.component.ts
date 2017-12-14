import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-balance-info',
  templateUrl: './balance-info.component.html',
  styleUrls: ['./balance-info.component.css']
})
export class BalanceInfoComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  goBack(): void {
  	this.location.back();
  }

}
