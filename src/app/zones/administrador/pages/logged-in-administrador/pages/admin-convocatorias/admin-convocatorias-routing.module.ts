import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminConvocatoriasComponent} from './admin-convocatorias.component';
import {FormConvocatoriasComponent} from './pages/form-convocatorias/form-convocatorias.component';
import {RoutingPathAdmin} from '../../../../routing-path-admin';
import {EditarConvocatoriaComponent} from './pages/editar-convocatoria/editar-convocatoria.component';

const routes: Routes = [
  {
    path: '',
    component: AdminConvocatoriasComponent
  },
  {
    path: RoutingPathAdmin.LOGGED_IN_ROUTING.pages.convocatorias_form.path,
    component: FormConvocatoriasComponent
  },
  {
    path: RoutingPathAdmin.LOGGED_IN_ROUTING.pages.convocatorias_editar.path,
    component: EditarConvocatoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminConvocatoriasRoutingModule { }
