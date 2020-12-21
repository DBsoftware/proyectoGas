import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarNoLoggedComponent } from './navbar-no-logged.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
  ],
  declarations: [NavbarNoLoggedComponent],
  exports: [NavbarNoLoggedComponent]
})
export class NavbarNoLoggedModule { }
