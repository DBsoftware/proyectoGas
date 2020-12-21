import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppConfig} from '../../../../../../../../config/app-config';
import {MatDialog} from '@angular/material';
import {Location} from '@angular/common';
import {EvaluacionDesempenoService} from '../../../../../../services/logged-in/pages/evaluacion-desempeno/evaluacion-desempeno.service';
import {LoadingService} from '../../../../../../../../services/loading/loading.service';
import {DialogConfirmComponent} from '../../../../../../../../shared/dialog-confim/dialog-confirm.component';
import {SuccessDialogComponent} from '../../../../../../../../shared/success-dialog/success-dialog.component';
import {ActivatedRoute} from '@angular/router';
import {PdfViewerComponent} from '../../../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {ConvocatoriaService} from '../../../../../../services/logged-in/pages/convocatoria/convocatoria.service';
import {CreateConvocatoria} from '../../../../../../../../interfaces/create-convocatoria';

@Component({
  selector: 'app-editar-convocatoria',
  templateUrl: './editar-convocatoria.component.html',
  styleUrls: ['./editar-convocatoria.component.scss']
})
export class EditarConvocatoriaComponent implements OnInit {
  form: FormGroup;
  urlToUpload = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/asresource`;
  idFiles: number[] = [];
  idFile: number;
  id: number;

  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private location: Location,
              private _convocatoria: ConvocatoriaService,
              private _activated: ActivatedRoute,
              public _loading: LoadingService) {
  }

  ngOnInit() {
    this.createForm();
    this._activated.params
      .subscribe(params => {
        console.log(params);
        this.id = params.id;
        this._convocatoria.getConvocatoriaById(params.id)
          .subscribe(data => {
              if (data) {
                this.idFile = data.file.id;
                this.form.get('descripcion').setValue(data.description);
              }
          },err => {
            this.location.back();
          });
      });
  }

  createForm() {
    this.form = this.fb.group(
      {
        descripcion: ['', [Validators.required]],
        adjuntos: ['', [Validators.required]],
      }
    );
  }

  recivedIdFiles(event) {
    this.idFiles = event;
  }

  editarConvocatoria() {
    if (this.form.valid && this.idFiles.length > 0) {
      this.dialog.open(DialogConfirmComponent,
        {
          data: {
            title: 'Confirmar transacción',
            content: '¿Confirma la creación de la convocatoria?'
          }
        })
        .afterClosed()
        .subscribe(result => {
          if (result) {
            const form: CreateConvocatoria = {
              fileId: this.idFiles[0],
              description: this.form.get('descripcion').value
            };
            this._convocatoria.editarConvocatoria(form, this.id)
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


