import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasFechasVencimientoClientesRoutingModule } from './consultas-fechas-vencimiento-clientes-routing.module';
import { ConsultasFechasVencimientoClientesComponent } from './consultas-fechas-vencimiento-clientes.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import { DatatableConsultasFechasVencimientoComponent } from './datatable-consultas-fechas-vencimiento/datatable-consultas-fechas-vencimiento.component';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {DateMomentModule} from '../../../../../../shared/date-moment/date-moment.module';

@NgModule({
  imports: [
    CommonModule,
    ConsultasFechasVencimientoClientesRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatCheckboxModule,
    MatTooltipModule,
    FormErrorsModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatTabsModule,
    DialogConfirmModule,
    DateMomentModule
  ],
  declarations: [ConsultasFechasVencimientoClientesComponent, DatatableConsultasFechasVencimientoComponent]
})
export class ConsultasFechasVencimientoClientesModule { }
