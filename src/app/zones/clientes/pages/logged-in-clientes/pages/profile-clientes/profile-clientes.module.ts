import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileClientesRoutingModule } from './profile-clientes-routing.module';
import { ProfileClientesComponent } from './profile-clientes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatPaginatorModule,
  MatProgressBarModule, MatSelectModule, MatTableModule, MatTabsModule, MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormErrorsModule} from '../../../../../../shared/form-errors/form-errors.module';
import { DatatableComponent } from './datatable/datatable.component';
import { DialogChangePasswordComponent } from './dialog-change-password/dialog-change-password.component';
import {SuccessDialogModule} from '../../../../../../shared/success-dialog/success-dialog.module';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import { AddCodeDialogComponent } from './add-code-dialog/add-code-dialog.component';
import { EditCodeDialogComponent } from './edit-code-dialog/edit-code-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileClientesRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatIconModule,
    FormErrorsModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatTableModule,
    SuccessDialogModule,
    DialogConfirmModule,
    MatSelectModule,
  ],
  declarations: [ProfileClientesComponent, DatatableComponent, DialogChangePasswordComponent, AddCodeDialogComponent, EditCodeDialogComponent],
  entryComponents: [DialogChangePasswordComponent, EditCodeDialogComponent, AddCodeDialogComponent]
})
export class ProfileClientesModule { }
