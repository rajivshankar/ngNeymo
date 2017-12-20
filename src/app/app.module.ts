import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleSignInComponent } from 'angular-google-signin';
import { PersistenceModule } from 'angular-persistence';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/modules/shared.module';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BalanceInfoComponent } from './balance-info/balance-info.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { VendorsComponent } from './vendors/vendors.component';
import { CategoriesComponent } from './categories/categories.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BalanceInfoComponent,
    ActivityFeedComponent,
    VendorsComponent,
    CategoriesComponent,
    TransactionListComponent,
    GoogleSignInComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    PersistenceModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
