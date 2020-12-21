import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedInAdministradorComponent } from './logged-in-administrador.component';
import {LoggedInRoutingAdministradorModule} from './logged-in-routing-administrador.module';
import {
  DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HeaderModule} from '../../../../shared/header/header.module';
import {BreadcrumbModule} from '../../../../shared/breadcrumb/breadcrumb.module';
import {MenuModule} from '../../../../shared/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    BreadcrumbModule,
    HeaderModule,
    MatButtonModule,
    MenuModule,
    LoggedInRoutingAdministradorModule,
  ],
  declarations: [LoggedInAdministradorComponent],
  providers: [
  ],

})
export class LoggedInAdministradorModule { }
