import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../../../../config/app-config';
import {RoutingPath} from '../../../../routing-path';
import {AuthZonesService} from '../../../../services/auth-zones/auth-zones.service';
import {ClientesConfig} from '../../config/clientes-config';
import {RoutingPathClientes} from '../../routing-path-clientes';

@Component({
  selector: 'app-logged-in-clientes',
  templateUrl: './logged-in-clientes.component.html',
  styleUrls: ['./logged-in-clientes.component.scss']
})
export class LoggedInClientesComponent implements OnInit {
  logo = AppConfig.APP_LOGO;
  initRoute = `${RoutingPath.APP_ROUTING.pages.clientes.path}/${ RoutingPathClientes.CLIENTES_ROUTING.pages.no_logged.path }`;
  url = RoutingPath.APP_ROUTING.pages.clientes.path;
  companyName = AppConfig.APP_NAME;
  zoneId = ClientesConfig.ZONE_ID;

  sidenavoptions = {
    modenavbar: 'over',
    fixed: 'fixed',
    distancebottomfixed: 0,
    distancetopfixed: 0
  };
  constructor(
    public _auth: AuthZonesService,
  ) { }

  ngOnInit() {
  }

}
