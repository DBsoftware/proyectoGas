import { Component, OnInit } from '@angular/core';
import {RoutingPath} from '../../../../routing-path';
import {ProveedoresConfig} from '../../config/proveedores-config';

@Component({
  selector: 'app-no-logged-proveedores',
  templateUrl: './no-logged-proveedores.component.html',
  styleUrls: ['./no-logged-proveedores.component.scss']
})
export class NoLoggedProveedoresComponent implements OnInit {
  routeInit = `/${ RoutingPath.APP_ROUTING.pages.proveedores.path }`;
  zoneId = ProveedoresConfig.ZONE_ID;
  sidenavoptions = {
    modenavbar: 'over',
    fixed: 'fixed',
    distancebottomfixed: 0,
    distancetopfixed: 0
  };
  constructor() { }

  ngOnInit() {
  }

}
