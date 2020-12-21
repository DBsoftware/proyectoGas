import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrerClientesRoutingModule } from './registrer-clientes-routing.module';
import { RegistrerClientesComponent } from './registrer-clientes.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule, MatTableModule, MatTooltipModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RecaptchaModule} from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';
import {NumbersOnlyModule} from '../../../../../../shared/directives/numbers-only/numbers-only.module';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import {SpinnerBarModule} from '../../../../../../shared/spinner-bar/spinner-bar.module';
import {AutorizacionTratamientoModule} from '../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';
// import {FormlyModule} from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RegistrerClientesRoutingModule,
    MatInputModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    RecaptchaFormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    RecaptchaModule,
    FormErrorsModule,
    DialogConfirmModule,
    PdfViewerModule,
    NumbersOnlyModule,
    SuccessDialogModule,
    SpinnerBarModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    AutorizacionTratamientoModule,
/*    FormlyModule.forChild({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),*/
  ],
  declarations: [RegistrerClientesComponent]
})
export class RegistrerClientesModule { }
