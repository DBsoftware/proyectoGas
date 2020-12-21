import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppConfig} from '../../../../../../config/app-config';
import {Router} from '@angular/router';
import {AuthAdminService} from '../../../../services/auth/auth-admin.service';
import {LoginUser} from '../../../../../../interfaces/login-user';
import {RoutingPathAdmin} from '../../../../routing-path-admin';
import {RoutingPath} from '../../../../../../routing-path';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {LocalStorageService} from '../../../../../../services/localstorage/local-storage.service';
import {AuthZonesService} from '../../../../../../services/auth-zones/auth-zones.service';
import {ConfigAdmin} from '../../../../config/config-admin';
import {InfoDialogComponent} from '../../../../../../shared/info-dialog/info-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  logo = AppConfig.APP_LOGO;
  loginForm: FormGroup;

  constructor(
              private formBuilder: FormBuilder,
              private _authService: AuthZonesService,
              private dialog: MatDialog,
              private _localStorage: LocalStorageService,
              private router: Router) {
    this.createForm();

  }
  ngOnInit() {
    this._authService
      .onUserZoneAuthenticated$
      .subscribe(async result => {
          if (result)  {
            await this._localStorage.setItem(AppConfig.DINAMIC_LOGIN_URL_KEY, RoutingPath.APP_ROUTING.pages.administrador.path);
            await this._localStorage.setItem(AppConfig.LOGIN_URL, this.router.url);
            await this.router.navigate(
              [`/${RoutingPath.APP_ROUTING.pages.administrador.path}/usuario`]); // t
          } else {
            console.log('no logged');
          }
      }
      );
  }
  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      contrasena: ['', [Validators.required]],
      recaptcha: ['', [Validators.required]]
    });
  }
  doLogin() {
    if (this.loginForm.valid) {
      const userLogin: LoginUser = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('contrasena').value,
      };
      this._authService.loginZone(ConfigAdmin.ZONE_PREFIX, ConfigAdmin.ZONE_ID, userLogin)
        .subscribe(data => {
          if (data) {
            switch (data.status) {
              case 204:
                this.infoDialog('Error al  tratar de iniciar sesión', [{defaultMessage: 'El usuario introducido no existe, o esta inactivo'}]);
                break;
            }
          }
        }, err => {
          switch (err.status) {
            case 401:
              this.infoDialog('Error al  tratar de iniciar sesión', [{defaultMessage: 'las credenciales introducidas no son válidas'}]);
              break;
          }
        });
     }
  }


  infoDialog(title: string, content: any) {
    this.dialog.open(InfoDialogComponent, {
      data: {
        title: title,
        content: content
      }
    });
  }

}
