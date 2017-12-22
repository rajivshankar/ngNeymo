import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { PersistenceService} from 'angular-persistence';
import { StorageType } from 'angular-persistence/src/constants/persistence.storage_type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isAuthenticated = this.authService.isUserAuthenticated();

  constructor(
    private authService: AuthService,
    private persistenceService: PersistenceService,
  ) { }

  ngOnInit() {
    console.log('Client ID: ' + this.authService.getGoogleClientId());
    console.log('User Autheticated: ' + this.authService.isUserAuthenticated());
    console.log('persistence isAuth: ' + this.authService.getGoogleUser()['isAuth']);
    console.log('persistence googleId: ' + this.authService.getGoogleUser()['googleId']);
    console.log('persistence googleEmail: ' + this.authService.getGoogleUser()['googleEmail']);
    console.log('persistence googleName: ' + this.authService.getGoogleUser()['googleName']);
    console.log('persistence googleImageUrl: ' + this.authService.getGoogleUser()['googleImageUrl']);
  }
}
