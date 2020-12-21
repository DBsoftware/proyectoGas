import { Component, OnInit } from '@angular/core';
import {RoutingPathColaboradores} from '../../routing-path-colaboradores';
import {RoutingPath} from '../../../../routing-path';
import {ConfigColaboradores} from '../../config/config-colaboradores';

@Component({
  selector: 'app-logged-in-colaboradores',
  templateUrl: './logged-in-colaboradores.component.html',
  styleUrls: ['./logged-in-colaboradores.component.scss']
})
export class LoggedInColaboradoresComponent implements OnInit {
  sidenavoptions = {
    modenavbar: 'over',
    fixed: 'fixed',
    distancebottomfixed: 0,
    distancetopfixed: 0
  };
    zoneId = ConfigColaboradores.ZONE_ID;
    url = RoutingPath.APP_ROUTING.pages.colaboradores.path;
    loggedRoute = `${ RoutingPath.APP_ROUTING.pages.colaboradores.path }/${ RoutingPathColaboradores.COLABORADORES_ROUTING.pages.logged_in.path }`;
    companyName = 'Grupo del llano colaboradores';
  constructor() { }

  ngOnInit() {
  }

}
