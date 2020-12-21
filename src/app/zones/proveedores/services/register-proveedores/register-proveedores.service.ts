import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../../../config/app-config';
import {map} from 'rxjs/operators';
import {GeneralResponse} from '../../../../interfaces/general-response';
import {ClasificacionProveedorChecks} from '../../../../interfaces/clasificacion-proveedor-checks';
import {ProveedoresConfig} from '../../config/proveedores-config';
import {RegisterProveedor} from '../../../../interfaces/forms/register-proveedor';
import {InstructivoRegisterProveedores} from '../../../../interfaces/instructivo-register-proveedores';

@Injectable({
  providedIn: 'root'
})
export class RegisterProveedoresService {


  constructor(private http: HttpClient) {
  }

  registrarProveedor(form: RegisterProveedor) {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ProveedoresConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/user/sign-up`;
    return this.http.post<GeneralResponse>(url, form,{observe: 'response', params: AppConfig.yParam});
  }

  obtenerClasificacionProveedor() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/providerclassificationtype`;
    // return of(this.clasificacionProveedorChecks);
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <ClasificacionProveedorChecks[]>response.body.data;
          }
        })
      );
  }

  listarInputsFiles() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/providerequiredfile`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return response.body.data;
          }
        })
      );
  }
  getInstructions() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/providerdownloadfiles`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <InstructivoRegisterProveedores[]>response.body.data;
          }
        })
      );
  }


}
