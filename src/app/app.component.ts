import {Component, Inject, OnInit} from '@angular/core';
import {AppAuthService} from './services/app-auth/app-auth.service';
import {ClientesConfig} from './zones/clientes/config/clientes-config';
import {AppConfig} from './config/app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'three-companies';

  constructor(
    public appAuthService: AppAuthService
  ) {
  }

  ngOnInit(): void {
    console.info('attemp to login app');
    this.appAuthService.login(
      AppConfig.APP_GLOBAL_ZONE_PREFIX,
      AppConfig.APP_GLOBAL_ZONE_ID,
      {email: AppConfig.appUser, password: AppConfig.appPw}
    ).subscribe(response => {
        console.log('app autenticada');
      },
      error => {
        console.error('app no autenticada');
      });
  }
}
