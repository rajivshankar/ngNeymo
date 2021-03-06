import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../auth.service';
import { GoogleSignInSuccess } from 'angular-google-signin';
import { PersistenceService } from 'angular-persistence';
import { StorageType } from 'angular-persistence/src/constants/persistence.storage_type';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private isFirstEntry: boolean; // to enable user to be able to change the google user

  constructor(
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router,
    private location: Location,
  ) { }

  isAuthenticated = this.authService.isUserAuthenticated();
  gWidth = this.authService.getGoogleWidth();
  gHeight = this.authService.getGoogleHeight();
  gTheme = this.authService.getGoogleTheme();
  gScope = this.authService.getGoogleScope();
  gDisplayLongTitle = this.authService.getGoogleLongTitle();
  gClientId = this.authService.getClientId();

  ngOnInit() {
    console.log('auth.component - On Init');
    console.log('User Autheticated: ' + this.authService.isUserAuthenticated());
    console.log('isAuth: ' + this.authService.getGoogleUser()['isAuth']);
    console.log('googleId: ' + this.authService.getGoogleUser()['googleId']);
    console.log('googleEmail: ' + this.authService.getGoogleUser()['googleEmail']);
    console.log('googleName: ' + this.authService.getGoogleUser()['googleName']);
    console.log('googleImageUrl: ' + this.authService.getGoogleUser()['googleImageUrl']);
    this.isFirstEntry = true;
  }

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    console.log('Sign in Success proxy');
    this.authService.onGoogleSignInSuccess(event);
    this.isAuthenticated = this.authService.isUserAuthenticated();
    console.log('User Autheticated: ' + this.isAuthenticated);
    this.persistenceService.set('isAuth', this.isAuthenticated, { type: StorageType.LOCAL });
    console.log('persistence isAuth after signin : ' + this.persistenceService.get('isAuth', StorageType.LOCAL));
    if (!this.isFirstEntry) {
      this.onCancel();
    }
    this.isFirstEntry = false;
  }

  onCancel() {
    console.log('Exiting');
    this.location.back();
  }
}
