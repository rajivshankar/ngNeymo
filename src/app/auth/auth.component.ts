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
    console.log('auth.component');
    console.log('User Autheticated: ' + this.authService.isUserAuthenticated());
    console.log('persistence isAuth: ' + this.authService.getGoogleUser()['isAuth']);
    console.log('persistence googleId: ' + this.authService.getGoogleUser()['googleId']);
    console.log('persistence googleEmail: ' + this.authService.getGoogleUser()['googleEmail']);
    console.log('persistence googleName: ' + this.authService.getGoogleUser()['googleName']);
    console.log('persistence googleImageUrl: ' + this.authService.getGoogleUser()['googleImageUrl']);
  }

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    console.log('Sign in Success proxy');
    this.authService.onGoogleSignInSuccess(event);
    this.isAuthenticated = this.authService.isUserAuthenticated();
    console.log('User Autheticated: ' + this.isAuthenticated);
    this.persistenceService.set('isAuth', true)
    console.log('persistence is auth after signin : ' + this.persistenceService.get('isAuth'));
  }

  onCancel() {
    console.log('Exitting');
    this.router.navigate(['dashboard']);
  }
}
