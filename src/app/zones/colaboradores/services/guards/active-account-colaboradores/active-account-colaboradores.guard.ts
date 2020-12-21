import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {ValidateTokenService} from '../../../../../services/validate-token/validate-token.service';
import {AppConfig} from '../../../../../config/app-config';
import {ConfigColaboradores} from '../../../config/config-colaboradores';

@Injectable()
export class ActiveAccountColaboradoresGuard implements CanActivate {
  constructor(private validateToken: ValidateTokenService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ConfigColaboradores.ZONE_ID }/token/validate`;
    return this.validateToken.validateToken(next.params.userId, decodeURIComponent(next.params.token), url);
  }
}
