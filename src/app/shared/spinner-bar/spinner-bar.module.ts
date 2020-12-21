import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerBarComponent } from './spinner-bar.component';
import {MatProgressBarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  declarations: [SpinnerBarComponent],
  exports: [SpinnerBarComponent]
})
export class SpinnerBarModule { }
