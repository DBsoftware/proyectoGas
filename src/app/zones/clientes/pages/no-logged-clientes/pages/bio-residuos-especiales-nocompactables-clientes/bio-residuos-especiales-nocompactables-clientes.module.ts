import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BioResiduosEspecialesNocompactablesClientesRoutingModule } from './bio-residuos-especiales-nocompactables-clientes-routing.module';
import { BioResiduosEspecialesNocompactablesClientesComponent } from './bio-residuos-especiales-nocompactables-clientes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import {AutorizacionTratamientoModule} from '../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';

@NgModule({
  imports: [
    CommonModule,
    BioResiduosEspecialesNocompactablesClientesRoutingModule,
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
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    SuccessDialogModule,
    AutorizacionTratamientoModule
  ],
  declarations: [BioResiduosEspecialesNocompactablesClientesComponent]
})
export class BioResiduosEspecialesNocompactablesClientesModule { }
