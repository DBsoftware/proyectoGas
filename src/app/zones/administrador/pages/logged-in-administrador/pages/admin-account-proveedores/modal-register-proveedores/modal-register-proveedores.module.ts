import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalRegisterProveedoresComponent} from './modal-register-proveedores.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { ClasificacionFinancieraComponent } from './clasificacion-financiera/clasificacion-financiera.component';
import { InformacionTributariaComponent } from './informacion-tributaria/informacion-tributaria.component';
import { DocumentacionAdjuntaComponent } from './documentacion-adjunta/documentacion-adjunta.component';
import { ClasificacionProveedorComponent } from './clasificacion-proveedor/clasificacion-proveedor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule, MatButtonToggleModule,
  MatCheckboxModule, MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatRadioModule,
  MatSelectModule, MatSlideToggleModule, MatStepperModule, MatTableModule
} from '@angular/material';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {FormErrorsModule} from '../../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PdfViewerModule} from '../../../../../../../shared/pdf-viewer/pdf-viewer.module';
import {DialogConfirmModule} from '../../../../../../../shared/dialog-confim/dialog-confirm.module';
import {UploadMultipleFilesModule} from '../../../../../../../shared/upload-multiple-files/upload-multiple-files.module';
import {AutorizacionTratamientoModule} from '../../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    MatCheckboxModule,
    FormErrorsModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    PdfViewerModule,
    DialogConfirmModule,
    MatDividerModule,
    MatStepperModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatListModule,
    MatSlideToggleModule,
    UploadMultipleFilesModule,
    MatIconModule,
    MatTableModule,
    AutorizacionTratamientoModule,
  ],
  declarations: [ModalRegisterProveedoresComponent, GeneralInfoComponent, ClasificacionFinancieraComponent, InformacionTributariaComponent, DocumentacionAdjuntaComponent, ClasificacionProveedorComponent],
  entryComponents: [ModalRegisterProveedoresComponent]
})
export class ModalRegisterProveedoresModule { }
