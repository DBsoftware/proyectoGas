import { Component, OnInit } from '@angular/core';
import {RoutingPathAdmin} from '../../routing-path-admin';
import {RoutingPath} from '../../../../routing-path';
import {AppConfig} from '../../../../config/app-config';
import {AuthZonesService} from '../../../../services/auth-zones/auth-zones.service';
import {ConfigAdmin} from '../../config/config-admin';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in-administrador.component.html',
  styleUrls: ['./logged-in-administrador.component.scss']
})
export class LoggedInAdministradorComponent implements OnInit {
  logo = AppConfig.APP_LOGO;
  zoneId = ConfigAdmin.ZONE_ID;
  companyName = AppConfig.APP_NAME;
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
