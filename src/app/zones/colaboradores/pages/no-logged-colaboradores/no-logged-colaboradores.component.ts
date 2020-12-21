import { Component, OnInit } from '@angular/core';
import {RoutingPath} from '../../../../routing-path';
import {ConfigColaboradores} from '../../config/config-colaboradores';

@Component({
  selector: 'app-no-logged-colaboradores',
  templateUrl: './no-logged-colaboradores.component.html',
  styleUrls: ['./no-logged-colaboradores.component.scss']
})
export class NoLoggedColaboradoresComponent implements OnInit {
  zoneId = `${ ConfigColaboradores.ZONE_ID }`;
  routeInit = `/${ RoutingPath.APP_ROUTING.pages.colaboradores.path }`;
  sidenavOptions = {
    mode: 'over',
    fixed: 'fixed'
  };
  constructor() { }

  ngOnInit() {
  }

}
