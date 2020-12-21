import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoLoggedComponent } from './no-logged.component';
import {NoLoggedInRoutingModule} from './no-logged-in-routing.module';
import {MenuModule} from '../../../../shared/menu/menu.module';
import {NavbarNoLoggedModule} from '../../../../shared/navbar-no-logged/navbar-no-logged.module';
import {FooterModule} from '../../../../shared/footer/footer.module';
import {MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule} from '@angular/material';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    NoLoggedInRoutingModule,
    NavbarNoLoggedModule,
    FooterModule,
    MatSidenavModule,
    CdkAccordionModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    MenuModule],
  declarations: [NoLoggedComponent]
})
export class NoLoggedModule { }
