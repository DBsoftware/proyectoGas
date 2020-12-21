import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminEvaluacionDesempenoComponent} from './admin-evaluacion-desempeno.component';
import {FormEvaluacionDesempenoComponent} from './pages/form-evaluacion-desempeno/form-evaluacion-desempeno.component';
import {RoutingPathAdmin} from '../../../../routing-path-admin';
import {EditarEvaluacionDesempenoComponent} from './pages/editar-evaluacion-desempeno/editar-evaluacion-desempeno.component';

const routes: Routes = [
    {
      path: '',
      component: AdminEvaluacionDesempenoComponent
    },
    {
      path: RoutingPathAdmin.LOGGED_IN_ROUTING.pages.evaluacion_desempeno_form.path,
      component: FormEvaluacionDesempenoComponent
    },
    {
      path: RoutingPathAdmin.LOGGED_IN_ROUTING.pages.evaluacion_desempeno_edit_path.path,
      component: EditarEvaluacionDesempenoComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEvaluacionDesempenoRoutingModule { }
