import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppConfig} from '../../../../../../../../config/app-config';
import { MatDatepicker, MatDialog} from '@angular/material';
import {Location} from '@angular/common';
import {EvaluacionDesempenoService} from '../../../../../../services/logged-in/pages/evaluacion-desempeno/evaluacion-desempeno.service';
import {LoadingService} from '../../../../../../../../services/loading/loading.service';
import {DialogConfirmComponent} from '../../../../../../../../shared/dialog-confim/dialog-confirm.component';
import {SuccessDialogComponent} from '../../../../../../../../shared/success-dialog/success-dialog.component';
import {CreateEvaluacion} from '../../../../../../../../interfaces/create-evaluacion';
import * as _moment from 'moment';
import {Moment} from 'moment';
import {AutocompleteService} from '../../../../../../../../services/autocomplete/autocomplete.service';
import {Observable} from 'rxjs';
import {ProveedoresConfig} from '../../../../../../../proveedores/config/proveedores-config';

// tslint:disable-next-line:no-duplicate-imports

const moment = _moment;


@Component({
  selector: 'app-form-evaluacion-desempeno',
  templateUrl: './form-evaluacion-desempeno.component.html',
  styleUrls: ['./form-evaluacion-desempeno.component.scss'],
})
export class FormEvaluacionDesempenoComponent implements OnInit {
  form: FormGroup;
  urlToUpload = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/asresource`;
  idFiles: number[] = [];
  filteredProveedor$: Observable<any>;
  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private location: Location,
              public _autoComplete: AutocompleteService,
              private _evaluacion: EvaluacionDesempenoService,
              public _loading: LoadingService) { }

  ngOnInit() {
    this.createForm();
    this.filteredProveedor$ = this._autoComplete.controlToFilter(
      this.form.get('proveedores'),
      `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ProveedoresConfig.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/zone/${ ProveedoresConfig.ZONE_ID }/user/searchbynameornit`,
      AppConfig.xParam);
  }

  createForm() {
    this.form = this.fb.group(
      {
        descripcion: ['', [Validators.required]],
        year: ['', [Validators.required]],
        proveedores: ['', [Validators.required]],
        adjuntos: ['', [Validators.required]],
      }
    );
  }
  recivedIdFiles(event) {
    this.idFiles = event;
  }

  crearEvaluacion() {
    if (this.form.valid  && this.idFiles.length > 0) {

      this.dialog.open(DialogConfirmComponent,
        {
          data: {
            title: 'Confirmar transacción',
            content: '¿Confirma la creación de la evaluación?'
          }
        })
        .afterClosed()
        .subscribe(result => {
          if (result) {
            const formatYear = <Moment>this.form.get('year').value;
            const form: CreateEvaluacion = {
              description: this.form.get('descripcion').value,
              fileId: this.idFiles[0],
              providerId:  this._autoComplete.proveedorIdSelected,
              year: formatYear.year().toString()
          };
            this._evaluacion.crearEvaluacion(form)
              .subscribe(data => {
                this.succesDialog(data.body.message);
              });
          }
        });
    }
  }

  succesDialog(message: string) {
    return this.dialog.open(SuccessDialogComponent, {
      data: {
        message: message,
      }
    }).afterClosed()
      .subscribe(data => {
        this.location.back();
      });
  }


  chosenYearHandler(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {
     this.form.get('year').setValue(normalizedYear);
      datepicker.close();
  }
}
