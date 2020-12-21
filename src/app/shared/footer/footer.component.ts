import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../../config/app-config';
import {RoutingPath} from '../../routing-path';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  now = new Date().getFullYear();
  logo_white = AppConfig.APP_LOGO_WHITE;
  goAdmin = RoutingPath.APP_ROUTING.pages.administrador.path;

  constructor() { }

  ngOnInit() {
  }

}
