import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessDialogComponent } from './success-dialog.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatDialogModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [SuccessDialogComponent],
  exports: [SuccessDialogComponent],
  entryComponents: [SuccessDialogComponent]
})
export class SuccessDialogModule { }
