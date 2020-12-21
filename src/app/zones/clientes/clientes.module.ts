import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import {ClientesRegistroService} from './services/no-logged/clientes-registro/clientes-registro.service';

@NgModule({
  imports: [
    CommonModule,
    ClientesRoutingModule
  ],
  declarations: [ClientesComponent],
  providers: [ClientesRegistroService]
})
export class ClientesModule { }
