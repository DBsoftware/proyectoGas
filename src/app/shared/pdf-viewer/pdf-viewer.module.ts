import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerComponent } from './pdf-viewer.component';
import {MatButtonModule, MatProgressBarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {InfoDialogModule} from '../info-dialog/info-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    FlexLayoutModule,
    MatButtonModule,
    InfoDialogModule
  ],
  declarations: [PdfViewerComponent],
  exports: [PdfViewerComponent],
  entryComponents: [PdfViewerComponent]
})
export class PdfViewerModule { }
