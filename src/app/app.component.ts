import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { PersistenceService} from 'angular-persistence';
import { StorageType } from 'angular-persistence/src/constants/persistence.storage_type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'neymo';

  private isAuthenticated = this.persistenceService.get('isAuth', StorageType.LOCAL);

  constructor(
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) {}

  disconnectUser() {
    console.log('sign out pressed');
    this.authService.resetIsAuthenticated();
    console.log('User Autheticated: ' + this.authService.isUserAuthenticated());
    console.log('persistence isAuth: ' + this.persistenceService.get('isAuth', StorageType.LOCAL));
    this.router.navigate(['']);
    console.log(this.router)
  }
}
