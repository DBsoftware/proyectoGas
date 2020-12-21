import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../config/app-config';

@Component({
  selector: 'app-not-found',
  templateUrl: './app-not-found.component.html',
  styleUrls: ['./app-not-found.component.scss']
})
export class AppNotFoundComponent implements OnInit {
  dinamicURL = localStorage.getItem(AppConfig.DINAMIC_LOGIN_URL_KEY);

  constructor() { }

  ngOnInit() {
  }

}
