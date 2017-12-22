import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { BalanceSummaryRecord, VendorSummaryRecord, CategorySummaryRecord, ActivityFeedRecord } from './neymoMetaData';

@Injectable()
export class NeymoDataService {

  private baseUrl = 'api/';
  private balanceSummaryUrl = 'balanceSummary';
  private vendorSummaryUrl = 'vendorSummary';
  private categorySummaryUrl = 'categorySummary';
  private activityFeedUrl = 'activityFeed';

  constructor(
    private http: HttpClient,
  ) { }

  getBalanceSummary(): Observable<BalanceSummaryRecord[]> {
    return this.http.get<BalanceSummaryRecord[]>(this.baseUrl + this.balanceSummaryUrl)
      .pipe(
      tap(balanceSummary => console.log(`fetched balance summary`)),
      catchError(this.handleError('getBalanceSummary', [])));
  }

  getVendorSummary(): Observable<VendorSummaryRecord[]> {
    return this.http.get<VendorSummaryRecord[]>(this.baseUrl + this.vendorSummaryUrl)
      .pipe(
      tap(vendorSummary => console.log(`fetched vendor summary`)),
      catchError(this.handleError('getVendorSummary', [])));
  }

  getCategorySummary(): Observable<CategorySummaryRecord[]> {
    return this.http.get<CategorySummaryRecord[]>(this.baseUrl + this.categorySummaryUrl)
      .pipe(
      tap(categorySummary => console.log(`fetched cateogory summary`)),
      catchError(this.handleError('getCategorySummary', [])));
  }

  getActivityFeed(): Observable<ActivityFeedRecord[]> {
    return this.http.get<ActivityFeedRecord[]>(this.baseUrl + this.activityFeedUrl)
      .pipe(
      tap(acitivityFeed => console.log(`fetched activity feed`)),
      catchError(this.handleError('getActivityFeed', [])));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
