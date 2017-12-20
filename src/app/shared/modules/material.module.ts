import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';

@NgModule( {
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
  ],
})
export class MaterialModule { }
