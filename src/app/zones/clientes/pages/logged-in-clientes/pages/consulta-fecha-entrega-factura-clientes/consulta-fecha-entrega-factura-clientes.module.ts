import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaFechaEntregaFacturaClientesRoutingModule } from './consulta-fecha-entrega-factura-clientes-routing.module';
import { ConsultaFechaEntregaFacturaClientesComponent } from './consulta-fecha-entrega-factura-clientes.component';
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
import {ReactiveFormsModule} from '@angular/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {DatatableConsultaFechaEntregaComponent} from './datatable-consulta-fecha-entrega-clientes/consulta-fecha-entrega-factura.component';
import {DateMomentModule} from '../../../../../../shared/date-moment/date-moment.module';

@NgModule({
  imports: [
    CommonModule,
    ConsultaFechaEntregaFacturaClientesRoutingModule,
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
  declarations: [ConsultaFechaEntregaFacturaClientesComponent, DatatableConsultaFechaEntregaComponent]
})
export class ConsultaFechaEntregaFacturaClientesModule { }
