import { Injectable } from '@angular/core';
import { GoogleSignInSuccess } from 'angular-google-signin';

import { PersistenceService } from 'angular-persistence';
import { StorageType } from 'angular-persistence/src/constants/persistence.storage_type';

@Injectable()
export class AuthService {

  constructor(private persistenceService: PersistenceService) {
    // this.resetIsAuthenticated(); // remove comment to reset user
  }

  private googleUser: gapi.auth2.GoogleUser;
  private auth2: gapi.auth2.GoogleAuth;

  private myClientId = '1050419459269-cq7ah0d49167gvf7trql7u23sg9a2qci.apps.googleusercontent.com';

  private isAuthenticated = this.persistenceService.get('isAuth', StorageType.LOCAL);
  // private isAuthenticated = false;

  private myWidth = 50;
  private myHeight = 50;
  private myScope = 'profile email';
  private myLongTitle = true;
  private myTheme = 'dark';

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    this.googleUser = event.googleUser;
    let id: string = this.googleUser.getId();
    let profile: gapi.auth2.BasicProfile = this.googleUser.getBasicProfile();
    console.log('ID: ' +
      profile
        .getId()); // Do not send to your backend! Use an ID token instead.
    console.log('email: ' + profile.getEmail());
    console.log('Name: ' + profile.getName());
    this.persistenceService.set('googleId', profile.getId(), { type: StorageType.LOCAL });
    this.persistenceService.set('googleEmail', profile.getEmail(), { type: StorageType.LOCAL });
    this.persistenceService.set('googleName', profile.getName(), { type: StorageType.LOCAL });
    this.persistenceService.set('googleImageUrl', profile.getImageUrl(), { type: StorageType.LOCAL });
    this.persistenceService.set('isAuth', this.googleUser.isSignedIn() , {type: StorageType.LOCAL});
    this.isAuthenticated = this.persistenceService.get('isAuth', StorageType.LOCAL);
  }

  disconnecUser() {
    this.persistenceService.remove('googleId', StorageType.LOCAL);
    this.persistenceService.remove('googleEmail', StorageType.LOCAL);
    this.persistenceService.remove('googleName', StorageType.LOCAL);
    this.persistenceService.remove('googleImageUrl', StorageType.LOCAL);
    this.persistenceService.set('isAuth', false, { type: StorageType.LOCAL });
    this.isAuthenticated = this.persistenceService.get('isAuth', StorageType.LOCAL);
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

  resetIsAuthenticated(resetFlag: boolean = false): void {
    this.isAuthenticated = resetFlag;
    this.persistenceService.set('isAuth', this.isAuthenticated, { type: StorageType.LOCAL });
  }

  getGoogleUser(): object {
    return {
      'isAuth': this.persistenceService.get('isAuth', StorageType.LOCAL),
      'googleId': this.persistenceService.get('googleId', StorageType.LOCAL),
      'googleEmail': this.persistenceService.get('googleEmail', StorageType.LOCAL),
      'googleName': this.persistenceService.get('googleName', StorageType.LOCAL),
      'googleImageUrl': this.persistenceService.get('googleImageUrl', StorageType.LOCAL)
    };
  }

}
