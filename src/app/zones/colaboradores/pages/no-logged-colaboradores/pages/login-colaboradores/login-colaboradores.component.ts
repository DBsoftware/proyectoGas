import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../../../../../../config/app-config';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthZonesService} from '../../../../../../services/auth-zones/auth-zones.service';
import {MatDialog} from '@angular/material';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {Router} from '@angular/router';
import {RoutingPath} from '../../../../../../routing-path';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {LoginUser} from '../../../../../../interfaces/login-user';
import {RoutingPathClientes} from '../../../../../clientes/routing-path-clientes';
import {InfoDialogComponent} from '../../../../../../shared/info-dialog/info-dialog.component';
import {LocalStorageService} from '../../../../../../services/localstorage/local-storage.service';
import {ConfigColaboradores} from '../../../../config/config-colaboradores';

@Component({
  selector: 'app-login-colaboradores',
  templateUrl: './login-colaboradores.component.html',
  styleUrls: ['./login-colaboradores.component.scss']
})
export class LoginColaboradoresComponent implements OnInit {

  hide = true;
  logo = AppConfig.APP_LOGO;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthZonesService,
    private dialog: MatDialog,
    public _loading: LoadingService,
    private  _localStorage: LocalStorageService,
    private router: Router) {
    this.createForm();

  }
  ngOnInit() {
    this._authService
      .onUserZoneAuthenticated$
      .subscribe(async result => {
          if (result)  {
            await this._localStorage.setItem(AppConfig.DINAMIC_LOGIN_URL_KEY, RoutingPath.APP_ROUTING.pages.colaboradores.path);
            await this._localStorage.setItem(AppConfig.LOGIN_URL, this.router.url);
            this.router.navigate(
              [`/${RoutingPath.APP_ROUTING.pages.colaboradores.path}/usuario`])
              .then( async () => await this._localStorage.setItem(AppConfig.DINAMIC_LOGIN_URL_KEY, RoutingPath.APP_ROUTING.pages.colaboradores.path)); //
          } else {
            console.log('no logged');
          }
        }
        , err => {
        });
  }
  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      contrasena: ['', [Validators.required]],
      recaptcha: ['', Validators.required]
    });
  }
  doLogin() {
    if (this.loginForm.valid) {
      const userLogin: LoginUser = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('contrasena').value,
      };
      this._authService
        .loginZone(ConfigColaboradores.ZONE_PREFIX, ConfigColaboradores.ZONE_ID, userLogin)
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
  goToRegistrer() {
    this.router.navigate(
      [
        `/${RoutingPath.APP_ROUTING.pages.colaboradores.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.registrer.path}`
      ]);
  }
  gotoResetPassword() {
    this.router.navigateByUrl(
      `/${RoutingPath.APP_ROUTING.pages.colaboradores.path}/${RoutingPathClientes.NO_LOGGED_IN_ROUTING.pages.forget_password.path}`
    );
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
