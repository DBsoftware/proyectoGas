import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, of as observableOf} from 'rxjs';
import {SelectsMock} from './selects.mock';
import {map, tap} from 'rxjs/operators';
import {GeneralResponse} from '../../interfaces/general-response';
import {AppConfig} from '../../config/app-config';
import {CodigoSuscripcion} from '../../interfaces/codigo-suscripcion';
import {TipoIdentificacionSelect} from '../../interfaces/tipo-identificacion-select';
import {RelacionPropiedad} from '../../interfaces/relacion-propiedad';
import {ClientesConfig} from '../../zones/clientes/config/clientes-config';
import {TipoUsoSelect} from '../../interfaces/tipo-uso-select';
import {EstratoSelect} from '../../interfaces/estrato-select';
import {GasodomesticType} from '../../interfaces/gasodomestic-type';
import {SolucionEnergetica} from '../../interfaces/solucion-energetica';
import {CategoriaSelect} from '../../interfaces/categoria-select';
import {TipoNaturaleza} from '../../interfaces/tipo-naturaleza';
import {GrupoInteres} from '../../interfaces/grupo-interes';
import {TiempoOcurriendo} from '../../interfaces/tiempo-ocurriendo';
import {ProcesoSelect} from '../../interfaces/proceso-select';
import {ListarServiciosSelects} from '../../interfaces/listar-servicios-selects';
import {ListPostVentaSelect} from '../../interfaces/list-post-venta-select';
import {ConfigColaboradores} from '../../zones/colaboradores/config/config-colaboradores';

@Injectable({
  providedIn: 'root'
})
export class SelectsService {
  constructor(private http: HttpClient) { }
  getTipodeId(): Observable<TipoIdentificacionSelect[]> {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/identifycationtype`;
   // return observableOf(SelectsMock.tipoDocumento);
   return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <TipoIdentificacionSelect[]>response.body.data;
          }
        })
      );
  }
  getSuscriptionCodes(userId: number): Observable<CodigoSuscripcion[]> {
      const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/user/${ userId }/subscription`;
  //   return observableOf(SelectsMock.codigoSuscriptcion);
       return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.xParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <CodigoSuscripcion[]>response.body.data;
          }
        })
      );
  }

  getTiporelacionPropiedad(): Observable<RelacionPropiedad[]> {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/relationshipproperty`;
    // return observableOf(SelectsMock.codigoSuscriptcion);
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <RelacionPropiedad[]>response.body.data;
          }
        })
      );
  }
  getTipoDeFuga() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/typeofleak`;
  // return observableOf(SelectsMock.tipoFuga);
       return this.http.get<GeneralResponse>(url, {observe: 'response',  params: AppConfig.yParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return response.body.data;
          }
        })
      );
  }

/*  getCodigoCliente() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/codigocliente`;
    return observableOf(SelectsMock.codigoCliente);
    /!*       return this.http.get<GeneralResponse>(url, {observe: 'response'})
          .pipe(
            map(response => {
              switch (response.status) {
                case 200:
                  return response.body.data;
              }
            })
          );*!/
  }*/

  getTipoUso() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/usetype`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(data => {
        switch (data.status) {
          case 200:
            return <TipoUsoSelect[]>data.body.data;
        }
      })
      );
  }

  getEstrato() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/socioeconomiclevel`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(data => {
          switch (data.status) {
            case 200:
              return <EstratoSelect[]>data.body.data;
          }
        })
      );
  }

  getGasoDomesticType() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/gasdomestictype`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(data => {
          switch (data.status) {
            case 200:
              return <GasodomesticType[]>data.body.data;
          }
        })
      );
  }


  getGasoDomesticCategory() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/gasodomesticcategory`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(data => {
          switch (data.status) {
            case 200:
              return <any>data.body.data;
          }
        })
      );
  }

  getSolucionEnergetic() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/typenergeticsolution`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(data => {
          switch (data.status) {
            case 200:
              return <SolucionEnergetica[]>data.body.data;
          }
        })
      );
  }

  getCategoria() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ClientesConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ClientesConfig.ZONE_ID }/collectioncategory`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(data => {
          switch (data.status) {
            case 200:
              return <CategoriaSelect[]>data.body.data;
          }
        })
      );
  }
  getTipoNaturaleza() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/typenature`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(data => {
          switch (data.status) {
            case 200:
              return <TipoNaturaleza[]>data.body.data;
          }
        })
      );
  }
  tiempoSucediendo() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/timeunit`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <TiempoOcurriendo[]>response.body.data;
          }
        })
      );
  }
  getGrupoDeInteres() {
    const  url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/interestgroup`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <GrupoInteres[]>response.body.data;
          }
        })
      );
  }
  getProcessOfRecoletion() {
    const  url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/process`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.xParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <ProcesoSelect[]>response.body.data;
          }
        })
      );
  }
  getListarServicios() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/servicespecialandnoncompactablewaste`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.yParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <ListarServiciosSelects[]>response.body.data;
          }
        })
      );
  }

  getPostVentaService() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/postsaleservicetype`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.xParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return <ListPostVentaSelect[]>response.body.data;
          }
        })
      );
  }
  obtenerTipoDePersona() {
    const  url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/typeperson`;
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
  obtenerTipoDeIva() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/ivaregimetype`;
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
  obtenerRegimenDeIva() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/ivaregimetype`;
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
  obtenerRegimenDeRents() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/taxregimetype`;
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

  obtenerActividadEconomica() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/economicactivity`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.xParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return response.body.data;
          }
        })
      );
  }
  obtenerCategoriasColaboradores() {
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/zone/${ ConfigColaboradores.ZONE_ID }/contacformcategory`;
    return this.http.get<GeneralResponse>(url, {observe: 'response', params: AppConfig.xParam})
      .pipe(
        map(response => {
          switch (response.status) {
            case 200:
              return response.body.data;
          }
        })
      );
  }
}
