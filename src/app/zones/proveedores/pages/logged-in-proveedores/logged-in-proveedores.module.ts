import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedInProveedoresRoutingModule } from './logged-in-proveedores-routing.module';
import { LoggedInProveedoresComponent } from './logged-in-proveedores.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BreadcrumbModule} from '../../../../shared/breadcrumb/breadcrumb.module';
import {HeaderModule} from '../../../../shared/header/header.module';
import {SpinnerBarModule} from '../../../../shared/spinner-bar/spinner-bar.module';
import {MenuModule} from '../../../../shared/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    LoggedInProveedoresRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    BreadcrumbModule,
    HeaderModule,
    MatButtonModule,
    SpinnerBarModule,
    MenuModule
  ],
  declarations: [LoggedInProveedoresComponent]
})
export class LoggedInProveedoresModule { }
