import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoLoggedColaboradoresRoutingModule } from './no-logged-colaboradores-routing.module';
import { NoLoggedColaboradoresComponent } from './no-logged-colaboradores.component';
import {MatSidenavModule} from '@angular/material';
import {MenuModule} from '../../../../shared/menu/menu.module';
import {BreadcrumbModule} from '../../../../shared/breadcrumb/breadcrumb.module';
import {HeaderModule} from '../../../../shared/header/header.module';
import {FooterModule} from '../../../../shared/footer/footer.module';
import {NavbarNoLoggedModule} from '../../../../shared/navbar-no-logged/navbar-no-logged.module';

@NgModule({
  imports: [
    CommonModule,
    NoLoggedColaboradoresRoutingModule,
    MatSidenavModule,
    MenuModule,
    BreadcrumbModule,
    HeaderModule,
    FooterModule,
    NavbarNoLoggedModule
  ],
  declarations: [NoLoggedColaboradoresComponent]
})
export class NoLoggedColaboradoresModule { }
