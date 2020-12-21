import {Component, Input, OnInit} from '@angular/core';
import {AppConfig} from '../../config/app-config';
import {MatDrawer} from '@angular/material';

@Component({
  selector: 'app-navbar-no-logged',
  templateUrl: './navbar-no-logged.component.html',
  styleUrls: ['./navbar-no-logged.component.scss']
})
export class NavbarNoLoggedComponent implements OnInit {
   @Input() sideNav: MatDrawer;
   logo = `${ AppConfig.APP_LOGO_ICON_WHITE }`;
  constructor() { }

  ngOnInit() {
  }



}
