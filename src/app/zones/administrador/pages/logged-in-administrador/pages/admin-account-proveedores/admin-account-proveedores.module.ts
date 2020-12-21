import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAccountProveedoresRoutingModule } from './admin-account-proveedores-routing.module';
import { AdminAccountProveedoresComponent } from './admin-account-proveedores.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatDividerModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule,
  MatPaginatorModule,
  MatSlideToggleModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import {DialogConfirmModule} from '../../../../../../shared/dialog-confim/dialog-confirm.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ModalRegisterProveedoresModule} from './modal-register-proveedores/modal-register-proveedores.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminAccountProveedoresRoutingModule,
    MatTableModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatDialogModule,
    DialogConfirmModule,
    MatButtonModule,
    FlexLayoutModule,
    ModalRegisterProveedoresModule,
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [AdminAccountProveedoresComponent]
})
export class AdminAccountProveedoresModule { }
