import { Injectable } from '@angular/core';
import { GoogleSignInSuccess } from 'angular-google-signin';

@Injectable()
export class AuthService {

  constructor() { }

  private myClientId: string = '1050419459269-cq7ah0d49167gvf7trql7u23sg9a2qci.apps.googleusercontent.com';

  private isAuthenticated: boolean = false;

  private myWidth: number = 50;
  private myHeight: number = 50;
  private myScope: string = 'profile email';
  private myLongTitle: boolean = true;
  private myTheme: string = 'dark';

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    // let googleUser: gapi.auth2.GoogleUser = event.googleUser;
    // let id: string = googleUser.getId();
    // let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    // console.log('ID: ' +
    //   profile
    //     .getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    this.isAuthenticated = true;
  }

  isUserAuthenticated (): boolean {
  	return this.isAuthenticated;
  }

  getClientId(): string {
  	return this.myClientId;
  }

  getGoogleWidth(): number {
  	return this.myWidth;
  }

  getGoogleHeight(): number {
  	return this.myHeight;
  }

  getGoogleScope(): string {
  	return this.myScope;
  }

  getGoogleLongTitle(): boolean {
  	return this.myLongTitle;
  }

  getGoogleTheme(): string {
  	return this.myTheme;
  }

}
