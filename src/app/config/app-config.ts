import {Injectable} from '@angular/core';
import {Params} from '@angular/router';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfig {
  public static LOGIN_KEYWORD = 'login';
  private static xValue = 'x';
  private static _yValue = 'y';
  private static _zValue = 'token';
  private static _appUser = 'appllanogas@appgdl.com';
  private static _appPw = 'secret';
  public static get APP_NAME(): string { return 'Grupo del llano development'; }
  public static  get PORT(): number { return 8280; }
  public static get DINAMIC_LOGIN_URL_KEY(): string  { return 'zona_url'; }
  public static get LOGIN_URL(): string  { return 'login_url'; }
  public static get COMPANY_ID(): number { return 322; }
  public static get APP_LOGO(): string { return 'assets/llanogas.png'; }
  public static get APP_LOGO_ICON(): string { return 'assets/icon.png'; }
  public static get APP_LOGO_ICON_WHITE(): string { return 'assets/icon-white.png'; }
  public static get APP_LOGO_WHITE(): string { return 'assets/logo-white.png'; }
  // public static get API_DOMAIN(): string { return 'http://34.220.60.209'; }
  public static get API_DOMAIN(): string { return 'http://capstone.grupodellano.com'; }
  public static get API_PREFIX(): string { return '/apizones'; }
  // public static get API_DOMAIN(): string { return 'http://localhost'; }
  public static get GLOBAL_PREFIX(): string { return '/'; }
  public static get APP_GLOBAL_ZONE_PREFIX(): string { return 'app'; }
  public static get APP_GLOBAL_ZONE_ID(): number { return 5; }
  public static get LOGIN_EXPIRATION_HOURS(): number { return 36000000; }
  public static get x(): string { return this.xValue; }
  public static get DOWNLOAD_FACTURA_DOMAIN(): string { return 'http://190.60.226.202:8081/JasperRecibo-1.0-SNAPSHOT/ws/consultarRecibo'; }
  public static get GRUPO_DEL_LLANO_PUBLIC_IP(): string { return '190.60.226.202'; }
  public static get INSIDE_GRUPO_DEL_LLANO_DOWNLOAD_FACTURA_DOMAIN(): string { return 'http://10.43.51.150/JasperRecibo-1.0-SNAPSHOT/ws/consultarRecibo'; }
  public static get PUBLIC_IP_ESTADO_CUENTA_FINANCIACION(): string { return '190.60.226.202:8081'; }
  public static get INSIDE_GRUPO_DEL_LLANO_IP(): string { return '10.43.51.150'; }

  static get yValue(): string {
    return this._yValue;
  }

  static get zValue(): string {
    return this._zValue;
  }

  static get xParam(): Params {
    return {token: this.x};
  }

  static get yParam(): Params {
    return {token: this.yValue};
  }

  static get appUser(): string {
    return this._appUser;
  }

  static get appPw(): string {
    return this._appPw;
  }

  static addXParam(httpParams: HttpParams) {
    return httpParams.append('token', this.x);
  }
  static addYParam(httpParams: HttpParams) {
    return httpParams.append('token', this._yValue);
  }
}









