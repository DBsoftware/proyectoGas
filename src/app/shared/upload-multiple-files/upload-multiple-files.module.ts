import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadMultipleFilesComponent } from './upload-multiple-files.component';
import {SuccessDialogModule} from '../success-dialog/success-dialog.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatDialogModule, MatDividerModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTooltipModule
} from '@angular/material';
import {FormErrorsModule} from '../form-errors/form-errors.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SuccessDialogModule,
    FlexLayoutModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatButtonModule,
    FormErrorsModule,
    ReactiveFormsModule,
    MatDividerModule
  ],
  declarations: [UploadMultipleFilesComponent],
  exports: [UploadMultipleFilesComponent]
})
export class UploadMultipleFilesModule { }
