import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoDialogComponent } from './info-dialog.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [InfoDialogComponent],
  entryComponents: [InfoDialogComponent],
  exports: [InfoDialogComponent]
})
export class InfoDialogModule { }
