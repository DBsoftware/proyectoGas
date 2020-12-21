import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {
  MatProgressBarModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    MatIconModule,
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressBarModule,
    MatButtonModule,
    MatTooltipModule,
    FlexLayoutModule,
    RouterModule,

  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
