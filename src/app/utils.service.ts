import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

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

}
