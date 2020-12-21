import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../../../../config/app-config';
import {RoutingPath} from '../../../../routing-path';
import {RoutingPathClientes} from '../../../clientes/routing-path-clientes';
import {AuthZonesService} from '../../../../services/auth-zones/auth-zones.service';
import {RoutingPathProveedores} from '../../routing-path-proveedores';
import {ProveedoresConfig} from '../../config/proveedores-config';

@Component({
  selector: 'app-logged-in-proveedores',
  templateUrl: './logged-in-proveedores.component.html',
  styleUrls: ['./logged-in-proveedores.component.scss']
})
export class LoggedInProveedoresComponent implements OnInit {
  logo = AppConfig.APP_LOGO;
  url = RoutingPath.APP_ROUTING.pages.proveedores.path;
  zoneId = ProveedoresConfig.ZONE_ID;
  companyName = AppConfig.APP_NAME;
  sidenavoptions = {
    modenavbar: 'over',
    fixed: 'fixed',
    distancebottomfixed: 0,
    distancetopfixed: 0
  };
  ArrayRoutes = [
    {
      description: 'Firmas instaladoras',
      path: RoutingPathProveedores.LOGGED_IN_ROUTING.pages.firmas_instaladoras.path
    },
    {
      description: 'Consulta de estado',
      path: RoutingPathProveedores.LOGGED_IN_ROUTING.pages.consulta_estado.path
    },
    {
      description: 'Certificados de retención',
      path: RoutingPathProveedores.LOGGED_IN_ROUTING.pages.certificados_retencion.path
    },
    {
      description: 'Convocatoria proveedores',
      path: RoutingPathProveedores.LOGGED_IN_ROUTING.pages.convocatoria_proveedores.path
    },
    {
      description: 'Evaluación desempeño',
      path: RoutingPathProveedores.LOGGED_IN_ROUTING.pages.evaluacion_desempeno.path
    }
  ];
  constructor(public _auth: AuthZonesService) { }

  ngOnInit() {
  }

}
