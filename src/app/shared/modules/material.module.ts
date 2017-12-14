import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule( { 
  imports: [
  	MatButtonModule,
  	MatIconModule,
  	MatCardModule,
    MatToolbarModule,
  ],
  exports: [
  	MatButtonModule,
  	MatIconModule,
  	MatCardModule,
    MatToolbarModule,
  ],
})
export class MaterialModule { }
