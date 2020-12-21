import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedInClientesRoutingModule } from './logged-in-clientes-routing.module';
import { LoggedInClientesComponent } from './logged-in-clientes.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule} from '@angular/material';
import {HeaderModule} from '../../../../shared/header/header.module';
import {BreadcrumbModule} from '../../../../shared/breadcrumb/breadcrumb.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SpinnerBarModule} from '../../../../shared/spinner-bar/spinner-bar.module';
import {MenuModule} from '../../../../shared/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    LoggedInClientesRoutingModule,
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
  declarations: [LoggedInClientesComponent]
})
export class LoggedInClientesModule { }
