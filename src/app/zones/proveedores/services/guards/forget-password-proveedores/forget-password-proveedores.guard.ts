import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {ValidateTokenService} from '../../../../../services/validate-token/validate-token.service';
import {AppConfig} from '../../../../../config/app-config';
import {ClientesConfig} from '../../../../clientes/config/clientes-config';
import {ProveedoresConfig} from '../../../config/proveedores-config';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordProveedoresGuard implements CanActivate {
  constructor(private validateToken: ValidateTokenService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/user/rememberpasswordrequest/validate`;
    return this.validateToken.validateToken(next.params.userId, next.params.token, url);
  }
}
