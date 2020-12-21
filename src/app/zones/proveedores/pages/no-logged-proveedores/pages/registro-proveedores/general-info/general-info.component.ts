import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AbstractControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {SelectsService} from '../../../../../../../services/selects/selects.service';
import {LoadingService} from '../../../../../../../services/loading/loading.service';
import {AutocompleteService} from '../../../../../../../services/autocomplete/autocomplete.service';
import {AppConfig} from '../../../../../../../config/app-config';
import {MatDialog, MatTableDataSource, MatTooltip} from '@angular/material';
import {ColombianNomenclatureComponent} from '../../../../../../../shared/colombian-nomenclature/colombian-nomenclature.component';

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
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns = ['celular', 'acciones'];
  @ViewChild('myTooltip') tooltip: MatTooltip;
  @Output() ArrPhones: EventEmitter<Array<number>> = new EventEmitter<Array<number>>();


  constructor(private _selects: SelectsService,
              public _autoComplete: AutocompleteService,
              private dialog: MatDialog,
              public _loading: LoadingService) {

  }

  ngOnInit() {
    this.tipoIdentifacion$ = this._selects.getTipodeId();
    this.filteredState$ = this._autoComplete.controlToFilter(
      this.form.get('departamento'),
      `${AppConfig.API_DOMAIN}:${AppConfig.PORT}${AppConfig.GLOBAL_PREFIX}company/${AppConfig.COMPANY_ID}/divpola/searchdepartmentbydescription`,
      AppConfig.yParam);
    this._autoComplete.departmentSearched$
      .subscribe(searched => {
        if (searched) {
          this.filteredMunicipio$ = this._autoComplete.controlToFilter(
            this.form.get('municipio'),
            `${AppConfig.API_DOMAIN}:${AppConfig.PORT}${AppConfig.GLOBAL_PREFIX}company/${AppConfig.COMPANY_ID}/divpola/department/${this._autoComplete.selectedStateCode}/towns/searchtownbydescription`,
            AppConfig.yParam);
        }
      });

    this.form.get('celular').valueChanges
      .subscribe(data => {
        if (data) {
          if (data.length > 9) {
            this.tooltip.show(0);
          }
        }
      });
  }


  idTypeChange(option) {
    if (option.description === 'Cédula' || option.description === 'Cédula de extranjería') {
      this.form.get('digito_verficacion').enable();
    } else {
      this.form.get('digito_verficacion').disable();
    }
      console.log(option);
  }

  addTel() {
      this.dataSource.data.push(
          {
            celular: this.form.get('celular').value
          }
        );
    this.dataSource.data = this.dataSource.data; // reassigned to itself because does not update for itself
    if (this.dataSource.data.length > 0) {
      this.form.get('celular').setValidators(null);
      this.form.get('celular').setErrors(null);
      this.form.get('celular').setValue('');
    } else {
      this.form.get('celular').setValidators(Validators.required);
      this.form.get('celular').setErrors({required: true});
    }
    this.ArrPhones.emit(this.dataSource.data);
  }


  removeTel(index: number) {
    this.dataSource.data.splice(index, 1); // splice does not need reasigned to another array
    this.dataSource.data = this.dataSource.data;
    if (this.dataSource.data.length > 0) {
      this.form.get('celular').setValidators(null);
      this.form.get('celular').setErrors(null);
    } else {
      this.form.get('celular').setValidators(Validators.required);
      this.form.get('celular').setErrors({required: true});
    }
    this.ArrPhones.emit(this.dataSource.data);
  }

  openColombianNomenclature(control: AbstractControl) {
    this.dialog.open(ColombianNomenclatureComponent, {
      minWidth: '90vw',
      minHeight: '68vh',
      data: control
    });
  }

}
