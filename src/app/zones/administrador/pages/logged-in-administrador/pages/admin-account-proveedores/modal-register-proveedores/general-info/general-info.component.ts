import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {SelectsService} from '../../../../../../../../services/selects/selects.service';
import {AutocompleteService} from '../../../../../../../../services/autocomplete/autocomplete.service';
import {LoadingService} from '../../../../../../../../services/loading/loading.service';
import {AppConfig} from '../../../../../../../../config/app-config';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {
  @Input() form: FormGroup;
  filteredState$: Observable<any>;
  filteredMunicipio$: Observable<any>;
  tipoIdentifacion$: Observable<any>;
  constructor(private _selects: SelectsService,
              public _autoComplete: AutocompleteService,
              public _loading: LoadingService) {

  }

  ngOnInit() {
    this.tipoIdentifacion$ = this._selects.getTipodeId();
    /* this.filteredState$ = this._autoComplete.controlToFilter(
      this.form.get('departamento'),
      `${AppConfig.API_DOMAIN}:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/divpola/searchdepartmentbydescription`,
      AppConfig.yParam);
    this._autoComplete.departmentSearched$
      .subscribe(searched => {
        if (searched) {
          this.filteredMunicipio$ = this._autoComplete.controlToFilter(
            this.form.get('municipio'),
            `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/divpola/department/${ this._autoComplete.selectedStateCode }/towns/searchtownbydescription`,
            AppConfig.yParam);
        }
      }); */
  }

}
