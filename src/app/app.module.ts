import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { GoogleSignInComponent } from 'angular-google-signin';
import { PersistenceModule } from 'angular-persistence';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/modules/shared.module';
import { AuthService } from './auth.service';
import { NeymoDataService } from './neymo-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BalanceInfoComponent } from './balance-info/balance-info.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { VendorsComponent } from './vendors/vendors.component';
import { CategoriesComponent } from './categories/categories.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AuthComponent } from './auth/auth.component';
import { BalanceSummaryComponent } from './balance-summary/balance-summary.component';
import { CategorySummaryComponent } from './category-summary/category-summary.component';
import { VendorSummaryComponent } from './vendor-summary/vendor-summary.component';
import { ActivityFeedSummaryComponent } from './activity-feed-summary/activity-feed-summary.component';
import { UtilsService } from './utils.service';

import { IndianCurrency } from './IndianCurrency.pipe';
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
    BalanceSummaryComponent,
    CategorySummaryComponent,
    VendorSummaryComponent,
    ActivityFeedSummaryComponent,
    IndianCurrency,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    SharedModule,
    PersistenceModule,
    NgxCarouselModule,
  ],
  providers: [
    AuthService,
    NeymoDataService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
