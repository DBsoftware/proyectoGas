import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorizacionTratamientoComponent } from './autorizacion-tratamiento.component';
import {MatButtonModule, MatCheckboxModule, MatDialogModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {PdfViewerModule} from '../pdf-viewer/pdf-viewer.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AutorizacionDialogComponent } from './autorizacion-dialog/autorizacion-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDialogModule,
    PdfViewerModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  declarations: [AutorizacionTratamientoComponent, AutorizacionDialogComponent],
  entryComponents: [AutorizacionDialogComponent],
  exports: [AutorizacionTratamientoComponent]
})
export class AutorizacionTratamientoModule { }
