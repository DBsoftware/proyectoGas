import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogConfirmComponent} from './dialog-confirm.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [DialogConfirmComponent],
  entryComponents: [DialogConfirmComponent],
  exports: [DialogConfirmComponent]
})
export class DialogConfirmModule { }
