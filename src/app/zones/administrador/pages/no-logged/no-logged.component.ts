import { Component, OnInit } from '@angular/core';
import {ConfigAdmin} from '../../config/config-admin';

@Component({
  selector: 'app-no-logged',
  templateUrl: './no-logged-administrador.component.html',
  styleUrls: ['./no-logged.component.scss']
})
export class NoLoggedComponent implements OnInit {
  zoneId = ConfigAdmin.ZONE_ID;
  sidenavOptions = {
    mode: 'over',
    fixed: 'fixed'
  };
  constructor() { }

  ngOnInit() {
  }

}
