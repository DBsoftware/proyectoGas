import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppConfig} from '../../../../../../../../config/app-config';
import {LoadingService} from '../../../../../../../../services/loading/loading.service';
import {DialogConfirmComponent} from '../../../../../../../../shared/dialog-confim/dialog-confirm.component';
import {MatDialog, MatDialogModule} from '@angular/material';
import {EvaluacionDesempenoService} from '../../../../../../services/logged-in/pages/evaluacion-desempeno/evaluacion-desempeno.service';
import {SuccessDialogComponent} from '../../../../../../../../shared/success-dialog/success-dialog.component';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {ConvocatoriasProveedoresService} from '../../../../../../../proveedores/services/convocatorias-proveedores/convocatorias-proveedores.service';
import {ConvocatoriaService} from '../../../../../../services/logged-in/pages/convocatoria/convocatoria.service';
import {CreateConvocatoria} from '../../../../../../../../interfaces/create-convocatoria';

@Component({
  selector: 'app-form-upload-evaluacion-desempeno',
  templateUrl: './form-convocatorias.component.html',
  styleUrls: ['./form-convocatorias.component.scss']
})
export class FormConvocatoriasComponent implements OnInit {
  form: FormGroup;
  urlToUpload = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/asresource`;
  idFiles: number[] = [];
  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private location: Location,
              private _convocatorias: ConvocatoriaService,
              public _loading: LoadingService) { }

  ngOnInit() {
    this.createForm();
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

  crearConvocatoria() {
    if (this.form.valid  && this.idFiles.length > 0) {

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
              description: this.form.get('descripcion').value,
              fileId: this.idFiles[0]
            };
            this._convocatorias.crearConvocatoria(form)
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
      .subscribe(result => {
        this.location.back();
      });
  }

}
