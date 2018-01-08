import { Injectable } from '@angular/core';
import { GoogleSignInSuccess } from 'angular-google-signin';

import { PersistenceService } from 'angular-persistence';
import { StorageType } from 'angular-persistence/src/constants/persistence.storage_type';
import { NeymoUser, neymoHomePath } from './neymoMetaData';
import { NumberSymbol } from '@angular/common/src/i18n/locale_data_api';
import { NeymoDataService } from './neymo-data.service';
import { truncate } from 'fs';

const defaultDeviceId = 'web';
const defaultUuid = 'web';

@Injectable()
export class AuthService {

  constructor(
    private neymoDataService: NeymoDataService,
    private persistenceService: PersistenceService
  ) { }

  // private auth2: gapi.auth2.GoogleAuth;

  private myClientId = '1050419459269-cq7ah0d49167gvf7trql7u23sg9a2qci.apps.googleusercontent.com'; // NEYMO client ID

  private isAuthenticated = this.persistenceService.get('isAuth', StorageType.LOCAL);
  // private isAuthenticated = false;
  private currentNeymoUser: NeymoUser;

  private myWidth = 50;
  private myHeight = 50;
  private myScope = 'profile email';
  private myLongTitle = true;
  private myTheme = 'dark';

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    const googleUser: gapi.auth2.GoogleUser = event.googleUser;
    const googleIdToken: string = googleUser.getAuthResponse().id_token;
    // const id: string = googleUser.getId();
    const profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    const neymoAuthToken = this.persistenceService.get('neymoAuthToken', StorageType.LOCAL);
    console.log('ID: ' + profile.getId());
    console.log('email: ' + profile.getEmail());
    console.log('Name: ' + profile.getName());
    console.log('ID Token: ' + googleIdToken);
    // this.resetIsAuthenticated(); // remove comment to reset user
    this.persistenceService.set(
      'googleId',
      profile.getId(),
      { type: StorageType.LOCAL }
    );
    this.persistenceService.set(
      'googleEmail',
      profile.getEmail(),
      { type: StorageType.LOCAL }
    );
    this.persistenceService.set(
      'googleName',
      profile.getName(),
      { type: StorageType.LOCAL }
    );
    this.persistenceService.set(
      'googleImageUrl',
      profile.getImageUrl(),
      { type: StorageType.LOCAL }
    );
    this.persistenceService.set(
      'isAuth',
      googleUser.isSignedIn(),
      { type: StorageType.LOCAL }
    );
    // this.persistenceService.set('googleToken', googleUser.getAuthResponse().id_token, { type: StorageType.LOCAL });

    if (!neymoAuthToken) {
      console.log('neymoAuthToken: ' + neymoAuthToken);
      this.createDefaultUser();
      this.currentNeymoUser.google_user_token = googleIdToken;
      console.log('Before POST: ');
      console.log(this.currentNeymoUser);
      this.getNeymoUser();
    }

    this.isAuthenticated = this.persistenceService.get('isAuth', StorageType.LOCAL);
  }

  getNeymoUser(): void {
    this.neymoDataService.postDeviceDetails(this.currentNeymoUser)
      .subscribe(neymoUser => {
        this.currentNeymoUser = neymoUser;
        console.log('Neymo User: ' + JSON.stringify(this.currentNeymoUser));
        this.persistenceService.set(
          'neymoUserToken',
          this.currentNeymoUser.auth_token,
          { type: StorageType.LOCAL }
        );
        console.log('Auth Token persistence: ' + this.persistenceService.get('neymoUserToken', StorageType.LOCAL));
      });
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
    // return this.isAuthenticated;
    return this.persistenceService.get('neymoUserToken', StorageType.LOCAL) ? true : false;
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

  getGoogleClientId(): string {
    return this.myClientId;
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

  getGoogleToken() {
    return (this.persistenceService.get('googleToken', StorageType.LOCAL));
  }

  createDefaultUser(): void {
    this.currentNeymoUser = new (NeymoUser);
    this.currentNeymoUser.device_id = defaultDeviceId;
    this.currentNeymoUser.uuid = defaultUuid;
    console.log(JSON.stringify(this.currentNeymoUser));
  }

  getNeymoUserToken(): string {
    return this.currentNeymoUser.auth_token;
  }
}
