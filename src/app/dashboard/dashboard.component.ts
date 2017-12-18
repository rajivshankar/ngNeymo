import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import {GoogleSignInSuccess } from 'angular-google-signin';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  isAuthenticated: boolean = false; 

  ngOnInit() {
	console.log('User Autheticated: ' + this.authService.isUserAuthenticated());
	this.isAuthenticated = this.authService.isUserAuthenticated();
  }

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
	console.log("Sign in Success proxy");
	this.authService.onGoogleSignInSuccess(event);
	this.isAuthenticated = this.authService.isUserAuthenticated();
  }

  gWidth: number = this.authService.getGoogleWidth();
  gHeight: number = this.authService.getGoogleHeight();
  gTheme: string = this.authService.getGoogleTheme();
  gScope: string = this.authService.getGoogleScope();
  gDisplayLongTitle: boolean = this.authService.getGoogleLongTitle();
  gClientId: string = this.authService.getClientId();
}
