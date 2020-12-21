import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BioResiduosConstruccionClientesRoutingModule } from './bio-residuos-construccion-clientes-routing.module';
import { BioResiduosConstruccionClientesComponent } from './bio-residuos-construccion-clientes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import {AutorizacionTratamientoModule} from '../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';
import {UploadMultipleFilesModule} from '../../../../../../shared/upload-multiple-files/upload-multiple-files.module';

@NgModule({
  imports: [
    CommonModule,
    BioResiduosConstruccionClientesRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    MatCheckboxModule,
    FormErrorsModule,
    FlexLayoutModule,
    PdfViewerModule,
    DialogConfirmModule,
    MatDividerModule,
    SuccessDialogModule,
    AutorizacionTratamientoModule,
    UploadMultipleFilesModule
  ],
  declarations: [BioResiduosConstruccionClientesComponent]
})
export class BioResiduosConstruccionClientesModule { }
