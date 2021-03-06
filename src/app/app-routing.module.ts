import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { CategoriesComponent } from './categories/categories.component';
import { BalanceInfoComponent } from './balance-info/balance-info.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { VendorsComponent } from './vendors/vendors.component';
import { AuthComponent } from './auth/auth.component';
import { neymoHomePath } from './neymoMetaData';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'activity-feed', component: ActivityFeedComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'balance-info', component: BalanceInfoComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'vendors', component: VendorsComponent },
  { path: 'signin', component: AuthComponent },
  { path: '', redirectTo: neymoHomePath, pathMatch: 'full' },
  { path: '**', redirectTo: neymoHomePath, pathMatch: 'full' },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
