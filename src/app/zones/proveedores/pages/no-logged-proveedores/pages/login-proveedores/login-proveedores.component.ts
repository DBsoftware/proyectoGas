import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AppConfig} from '../../../../../../config/app-config';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthZonesService} from '../../../../../../services/auth-zones/auth-zones.service';
import {MatDialog} from '@angular/material';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {Router} from '@angular/router';
import {RoutingPath} from '../../../../../../routing-path';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {LoginUser} from '../../../../../../interfaces/login-user';
import {ClientesConfig} from '../../../../../clientes/config/clientes-config';
import {InfoDialogComponent} from '../../../../../../shared/info-dialog/info-dialog.component';
import {RoutingPathProveedores} from '../../../../routing-path-proveedores';
import {LocalStorageService} from '../../../../../../services/localstorage/local-storage.service';
import {ProveedoresConfig} from '../../../../config/proveedores-config';

@Component({
  selector: 'app-login-proveedores',
  templateUrl: './login-proveedores.component.html',
  styleUrls: ['./login-proveedores.component.scss']
})
export class LoginProveedoresComponent implements OnInit, OnDestroy {
  hide = true;
  logo = AppConfig.APP_LOGO;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthZonesService,
    private dialog: MatDialog,
    public _loading: LoadingService,
    private  _localStorage: LocalStorageService,
    public  _selectService: SelectsService,
    private router: Router) {
    this.createForm();

  }
  ngOnInit() {
    this._authService
      .onUserZoneAuthenticated$
      .subscribe(result => {
          if (result)  {
            this._localStorage.setItem(AppConfig.LOGIN_URL, this.router.url);
            this.router.navigate(
              [`/${RoutingPath.APP_ROUTING.pages.proveedores.path}/usuario`])
              .then(() => this._localStorage.setItem(AppConfig.DINAMIC_LOGIN_URL_KEY, RoutingPath.APP_ROUTING.pages.proveedores.path)); //
          } else {
            console.log('no logged');
          }
        }
        , err => {
        });
  }
  ngOnDestroy(): void {
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
      this._authService.loginZone(ProveedoresConfig.ZONE_PREFIX, ProveedoresConfig.ZONE_ID, userLogin) // todo change zone to proovedores
        .subscribe(data => {
          if (data) {
            switch (data.status) {
              case 204:
                this.infoDialog('Error al  tratar de iniciar sesión',
                  [
                      {
                        defaultMessage: 'El usuario introducido no existe, o esta inactivo'
                      }
                    ]
                );
                break;
            }
          }
        }, err => {
          switch (err.status) {
            case 401:
              this.infoDialog('Error al  tratar de iniciar sesión',
                [
                    {
                      defaultMessage: 'las credenciales introducidas no son válidas'
                    }
                  ]
              );
              break;
          }
        });
    }
  }
  goToRegistrer() {
    this.router.navigate(
      [
        `/${RoutingPath.APP_ROUTING.pages.proveedores.path}/${RoutingPathProveedores.PROVEEDORES_ROUTING.pages.no_logged.path}/${RoutingPathProveedores.NO_LOGGED_IN_ROUTING.pages.registrer.path}`
      ]);
  }
  gotoResetPassword() {
    this.router.navigateByUrl(
      `/${RoutingPath.APP_ROUTING.pages.proveedores.path}/${RoutingPathProveedores.NO_LOGGED_IN_ROUTING.pages.forget_password.path}`
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
