import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable()
export class UtilsService {

  private displayBackButton = false;
  private currPage: Location;

  accountIcons = {
    'bank': { 'icon': 'account_balance', 'title': 'Available Balance' },
    'card': { 'icon': 'credit_card', 'title': 'Outstanding Balance' },
    'wallet': { 'icon': 'account_balance_wallet', 'title': 'Available Balance' },
  };

  categoryIcons = {
    'food & drinks': {'icon': 'restaurant', 'color': 'warn'},
    'entertainment': { 'icon': 'local_movies', 'color': 'accent' },
    'groceries': { 'icon': 'local_grocery_store', 'color': 'primary' },
    'travel': { 'icon': 'flight_takeoff', 'color': 'accent' },
    'shopping': { 'icon': 'shopping_cart', 'color': 'primary' },
  };

  constructor() {}

  getAccountIcon(name: string): string {
    return this.accountIcons[name.toLowerCase()]['icon'];
  }

  getAccountTitle(name: string): string {
    return this.accountIcons[name.toLowerCase()]['title'];
  }

  getCategoryIcon(name: string): string {
    return this.categoryIcons[name.toLowerCase()]['icon'];
  }

  getCategoryColor(name: string): string {
    return this.categoryIcons[name.toLowerCase()]['color'];
  }

  goBack(): void {
    this.currPage.back();
  }

  setLocation(currPage: Location) {
    this.displayBackButton = true;
    this.currPage = currPage;
    console.log('In Set Location (Button): ' + this.displayBackButton);
  }

  cancelBackButton() {
    this.displayBackButton = false;
    console.log('In cancelBackButton (display): ' + this.displayBackButton);
  }

  getDisplayBackButton(): boolean {
    return this.displayBackButton;
  }

}
