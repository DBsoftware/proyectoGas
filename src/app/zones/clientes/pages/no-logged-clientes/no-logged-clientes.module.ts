import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoLoggedClientesRoutingModule } from './no-logged-clientes-routing.module';
import { NoLoggedClientesComponent } from './no-logged-clientes.component';
import {NavbarNoLoggedModule} from '../../../../shared/navbar-no-logged/navbar-no-logged.module';
import {FooterModule} from '../../../../shared/footer/footer.module';
import {MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule} from '@angular/material';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MenuModule} from '../../../../shared/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    NoLoggedClientesRoutingModule,
    NavbarNoLoggedModule,
    FooterModule,
    MatSidenavModule,
    CdkAccordionModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    MenuModule
  ],
  declarations: [NoLoggedClientesComponent],
})
export class NoLoggedClientesModule { }
