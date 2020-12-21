import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluacionDesempenoProveedoresRoutingModule } from './evaluacion-desempeno-proveedores-routing.module';
import { EvaluacionDesempenoProveedoresComponent } from './evaluacion-desempeno-proveedores.component';
import {
  MatButtonModule, MatDialogModule,
  MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';

@NgModule({
  imports: [
    CommonModule,
    EvaluacionDesempenoProveedoresRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    FormErrorsModule,
    MatInputModule,
    FlexLayoutModule,
    MatDialogModule,
    PdfViewerModule
  ],
  declarations: [EvaluacionDesempenoProveedoresComponent]
})
export class EvaluacionDesempenoProveedoresModule { }
