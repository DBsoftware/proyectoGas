import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {AppConfig} from '../../../../../../../../config/app-config';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UploadFileService} from '../../../../../../../../services/upload/upload-file.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {RepositoryTratamientoService} from '../../../../../../services/logged-in/pages/repository-tratamiento/repository-tratamiento.service';
import {RegularExpressions} from '../../../../../../../../class/regular-expressions';
import {formatDate} from '@angular/common';
import {CreatePolitica} from '../../../../../../../../interfaces/forms/create-politica';
import {RoutingPath} from '../../../../../../../../routing-path';
import {RoutingPathAdmin} from '../../../../../../routing-path-admin';
import {SuccessDialogComponent} from '../../../../../../../../shared/success-dialog/success-dialog.component';
import {AutorizacionTratamientoService} from '../../../../../../services/logged-in/pages/autorizacion-tratamiento/autorizacion-tratamiento.service';

@Component({
  selector: 'app-form-autorizacion-datos',
  templateUrl: './form-autorizacion-datos.component.html',
  styleUrls: ['./form-autorizacion-datos.component.scss']
})
export class FormAutorizacionDatosComponent implements OnInit {
  appName = AppConfig.APP_NAME;
  formTratamiento: FormGroup;
  idFile;
  fileValid = false;
  uploading = false;
  constructor(private fb: FormBuilder,
              public uploader: UploadFileService,
              private dialog: MatDialog,
              private router: Router,
              private _autorizacionTratamientoService: AutorizacionTratamientoService,
              @Inject(LOCALE_ID) private locale: string) {
    this.buildFrom();
  }
  buildFrom() {
    this.formTratamiento = this.fb.group(
      {
        'date': [{value: this.format(), disabled: true}, Validators.required],
        'observation': ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX_AND_PUNTUACTION)]],
        'version': ['', [Validators.required,  Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX_AND_PUNTUACTION)]],
        'file': ['', Validators.required],
        'recaptcha': ['', Validators.required]
      });
  }

  ngOnInit() {
  }

  format() {
    return formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', this.locale);
  }

  removeFile() {
    this.formTratamiento.get('file').reset();
    this.formTratamiento.get('file').markAsTouched();
  }
  validFileAndUpload(event) {
    this.fileValid = false;
    this.uploading = true;
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/encoded`;
    const files = <FileList>event.files;
    const file = files[0];
    if (files.length > 0) {
      this.uploader.uploadFile(file, url)
        .subscribe(data => {
          this.uploading = false;
          this.fileValid = true;
          this.idFile = data.data;
          this.succesDialog(data.message);
        });
    }
  }

  createPolitic() {
    const politica = <CreatePolitica> {
      date: this.formTratamiento.get('date').value,
      observation: this.formTratamiento.get('observation').value,
      fileId: this.idFile,
      version: this.formTratamiento.get('version').value
    };
    this._autorizacionTratamientoService.createAutorization(politica)
      .subscribe(data => {
        console.log(data);
        this.succesDialog(data.message)
          .afterClosed()
          .subscribe(() => {
            this.router.navigateByUrl(`/${ RoutingPath.APP_ROUTING.pages.administrador.path }/${ RoutingPathAdmin.LOGGED_IN_ROUTING.pages.autorizacion.path }`);
          });
      });


  }

  recaptchaResolved(event) {

  }
  succesDialog(message: string) {
    return this.dialog.open(SuccessDialogComponent, {
      data: {
        message: message,
      }
    });
  }



}
