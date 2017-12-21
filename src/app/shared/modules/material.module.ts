import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule( {
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
  ],
})
export class MaterialModule { }
