import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { ColaboradoresComponent } from './colaboradores.component';

@NgModule({
  imports: [
    CommonModule,
    ColaboradoresRoutingModule
  ],
  declarations: [ColaboradoresComponent]
})
export class ColaboradoresModule { }
