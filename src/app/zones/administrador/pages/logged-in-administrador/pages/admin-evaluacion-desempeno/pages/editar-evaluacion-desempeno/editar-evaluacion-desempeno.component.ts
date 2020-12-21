import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppConfig} from '../../../../../../../../config/app-config';
import {MatDatepicker, MatDialog} from '@angular/material';
import {Location} from '@angular/common';
import {EvaluacionDesempenoService} from '../../../../../../services/logged-in/pages/evaluacion-desempeno/evaluacion-desempeno.service';
import {LoadingService} from '../../../../../../../../services/loading/loading.service';
import {DialogConfirmComponent} from '../../../../../../../../shared/dialog-confim/dialog-confirm.component';
import {SuccessDialogComponent} from '../../../../../../../../shared/success-dialog/success-dialog.component';
import {PdfViewerComponent} from '../../../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {ActivatedRoute} from '@angular/router';
import {CreateEvaluacion} from '../../../../../../../../interfaces/create-evaluacion';
import {AutocompleteService} from '../../../../../../../../services/autocomplete/autocomplete.service';
import * as _moment from 'moment';
import {Moment} from 'moment';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-editar-evaluacion-desempeno',
  templateUrl: './editar-evaluacion-desempeno.component.html',
  styleUrls: ['./editar-evaluacion-desempeno.component.scss']
})
export class EditarEvaluacionDesempenoComponent implements OnInit {
  form: FormGroup;
  urlToUpload = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/asresource`;
  idFiles: number[] = [];
  idFile: number;
  idProveddor: number;
  id: number;
  filteredProveedor$: Observable<any>;
  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private location: Location,
              private _activated: ActivatedRoute,
              public _autoComplete: AutocompleteService,
              private _evaluacion: EvaluacionDesempenoService,
              public _loading: LoadingService) { }

  ngOnInit() {
    this.createForm();
    this._activated.params
      .subscribe(params => {
        console.log(params);
        this.id = params.id;
        this._evaluacion.getEvaluacionById(params.id)
          .subscribe(data => {
            if (data) {
              this.idFile = data.file.id;
              this.idProveddor = data.providerId;
              this.form.patchValue(
                {
                  descripcion: data.description,
                  year: _moment(data.year),
                  proveedores: data.providerId
                }
              );
            }
          });
      });
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
              providerId:  this._autoComplete.proveedorIdSelected || this.idProveddor,
              year: formatYear.year().toString()
            };
            this._evaluacion.editarEvaluacion(form, this.id)
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
  openDialogPDF() {
    this.dialog.open(PdfViewerComponent, {
      minWidth: '90vw',
      minHeight: '68vh',
      data: {
        url: `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/${ this.idFile }/stream`
      },
    });
  }
}
