import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import {
  BalanceSummaryRecord,
  VendorSummaryRecord,
  CategorySummaryRecord,
  ActivityFeedRecord,
  NeymoUser,
  ResultsRecord,
} from './neymoMetaData';
import { PersistenceService } from 'angular-persistence/src/services/persistence.service';
import { StorageType } from 'angular-persistence/src/constants/persistence.storage_type';

@Injectable()
export class NeymoDataService {

  private internalUrl = 'api/';
  private neymoUrl = `https://neymo.herokuapp.com/restful/`;
  private neymoTestUrl = `https://moneybee-20151115.herokuapp.com/restful/`;
  private neymoLocalBaseUrl = `http://localhost:8000/restful/`; // to test local code only. strictly close it

  private baseUrl = this.internalUrl; // change this to point to the right backend

  // private reportParam = (this.baseUrl === 'api/') ? '/?reportName=' : '';
  private trailingSlash = (this.baseUrl === 'api/') ? '' : '/';
  private reportsUrl = (this.baseUrl === 'api/') ? '' : 'reports/';

  public balanceSummaryUrl = 'balance_summary';
  public vendorSummaryUrl = 'expense_by_vendor';
  public categorySummaryUrl = 'expense_by_category';
  public activityFeedUrl = 'activity_feed';
  private registerUserUrl = 'device/';

  private httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + this.persistenceService.get('neymoUserToken', StorageType.LOCAL),
      }
    ),
  };

  constructor(
    private http: HttpClient,
    private persistenceService: PersistenceService,
  ) { }

  /**
   * This function takes an end point string and a boolean flag to denote whether
   * the result is a report or a normal data seek
   * If it is a report, then the url is passed with the endpoint used as a report name
   * parameter
   */
  getBackendData(endPoint: string, report: boolean = false): Observable<ResultsRecord[]> {
    const url = report ? this.baseUrl + this.reportsUrl + endPoint + this.trailingSlash : this.baseUrl + endPoint;
    console.log('getting data from ' + url);
    return this.http.get<ResultsRecord[]>(url, this.httpOptions)
      .pipe(
        // tap(result => console.log('fetched report for ' + JSON.stringify(result))),
        tap(result => console.log('fetched report for ' + endPoint)),
        catchError(this.handleError('getData(' + endPoint + ')', []))
      );
  }

  postDeviceDetails(data): Observable<any> {
    return this.http.post(
      this.neymoLocalBaseUrl + this.registerUserUrl,
      data)
      .pipe(
        tap(
          userDetail => console.log(`fetched User details: ` + userDetail)
        ),
        catchError(this.handleError('postDeviceDetails', []))
      );
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
