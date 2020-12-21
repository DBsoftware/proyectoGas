import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroProveedoresRoutingModule } from './registro-proveedores-routing.module';
import { RegistroProveedoresComponent } from './registro-proveedores.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule, MatButtonToggleModule,
  MatCheckboxModule, MatDialogModule, MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatRadioGroup, MatRadioModule,
  MatSelectModule, MatSlideToggleModule, MatStepperModule, MatTableModule, MatTooltipModule
} from '@angular/material';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PdfViewerModule} from '../../../../../../shared/pdf-viewer/pdf-viewer.module';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { InformacionTributariaComponent } from './informacion-tributaria/informacion-tributaria.component';
import { ClasificacionFinancieraComponent } from './clasificacion-financiera/clasificacion-financiera.component';
import { ClasificacionProveedorComponent } from './clasificacion-proveedor/clasificacion-proveedor.component';
import { DocumentacionAdjuntaComponent } from './documentacion-adjunta/documentacion-adjunta.component';
import {UploadMultipleFilesModule} from '../../../../../../shared/upload-multiple-files/upload-multiple-files.module';
import {AutorizacionTratamientoModule} from '../../../../../../shared/autorizacion-tratamiento/autorizacion-tratamiento.module';
import {UppercaseTextModule} from '../../../../../../shared/uppercase-text/uppercase-text.module';
import {ColombianNomenclatureModule} from '../../../../../../shared/colombian-nomenclature/colombian-nomenclature.module';

@NgModule({
  imports: [
    CommonModule,
    RegistroProveedoresRoutingModule,
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
    UppercaseTextModule,
    MatTooltipModule,
    ColombianNomenclatureModule,
    MatDialogModule
  ],
  declarations: [RegistroProveedoresComponent, GeneralInfoComponent, InformacionTributariaComponent, ClasificacionFinancieraComponent, ClasificacionProveedorComponent, DocumentacionAdjuntaComponent]
})
export class RegistroProveedoresModule { }
