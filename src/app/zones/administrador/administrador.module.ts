import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador.component';
import {AuthAdminService} from './services/auth/auth-admin.service';

@NgModule({
  imports: [
    CommonModule,
    AdministradorRoutingModule,
  ],
  declarations: [AdministradorComponent],
  providers: [AuthAdminService]
})
export class AdministradorModule { }
