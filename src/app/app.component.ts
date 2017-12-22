import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { StorageType } from 'angular-persistence/src/constants/persistence.storage_type';
import { Location } from '@angular/common';
import { neymoHomePath, appTitle } from './neymoMetaData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = appTitle;
  private backBtnVisible  = true;

  constructor(
    private authService: AuthService,
    private location: Location,
  ) {}

  goBack() {
    console.log('Current URL: ' + this.location.path());
    if (this.location.path() !== neymoHomePath) {
      this.location.back();
    }
  }

  onActivate(component: Component) {
    this.backBtnVisible = (this.location.path() !== neymoHomePath);
  }
}
