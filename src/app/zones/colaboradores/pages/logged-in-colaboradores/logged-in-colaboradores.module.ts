import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedInColaboradoresRoutingModule } from './logged-in-colaboradores-routing.module';
import { LoggedInColaboradoresComponent } from './logged-in-colaboradores.component';
import {MatSidenavModule} from '@angular/material';
import {MenuModule} from '../../../../shared/menu/menu.module';
import {BreadcrumbModule} from '../../../../shared/breadcrumb/breadcrumb.module';
import {HeaderModule} from '../../../../shared/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    LoggedInColaboradoresRoutingModule,
    MatSidenavModule,
    MenuModule,
    BreadcrumbModule,
    HeaderModule
  ],
  declarations: [LoggedInColaboradoresComponent]
})
export class LoggedInColaboradoresModule { }
