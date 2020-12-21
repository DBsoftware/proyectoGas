import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresComponent } from './proveedores.component';

@NgModule({
  imports: [
    CommonModule,
    ProveedoresRoutingModule
  ],
  declarations: [ProveedoresComponent]
})
export class ProveedoresModule { }
