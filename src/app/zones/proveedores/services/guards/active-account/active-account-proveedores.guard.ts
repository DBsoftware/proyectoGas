import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AppConfig} from '../../../../../config/app-config';
import {ValidateTokenService} from '../../../../../services/validate-token/validate-token.service';
import {ProveedoresConfig} from '../../../config/proveedores-config';

@Injectable({
  providedIn: 'root'
})
export class ActiveAccountProveedoresGuard implements CanActivate {
  constructor(private validateToken: ValidateTokenService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    debugger
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/token/validate`;
    return this.validateToken.validateToken(next.params.userId, next.params.token, url);
  }
}
