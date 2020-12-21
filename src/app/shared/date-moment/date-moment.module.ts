import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DateMomentPipe} from './date-moment.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DateMomentPipe],
  exports: [DateMomentPipe]
})
export class DateMomentModule { }
