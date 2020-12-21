import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { formatDate } from '@angular/common';
import {UploadFileService} from '../../../../../../../../services/upload/upload-file.service';
import {MatDialog} from '@angular/material';
import {AppConfig} from '../../../../../../../../config/app-config';
import {CreatePolitica} from '../../../../../../../../interfaces/forms/create-politica';
import {RepositoryTratamientoService} from '../../../../../../services/logged-in/pages/repository-tratamiento/repository-tratamiento.service';
import {Router} from '@angular/router';
import {RoutingPath} from '../../../../../../../../routing-path';
import {RoutingPathAdmin} from '../../../../../../routing-path-admin';
import {ConfigAdmin} from '../../../../../../config/config-admin';
import {RegularExpressions} from '../../../../../../../../class/regular-expressions';
import {SuccessDialogComponent} from '../../../../../../../../shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-form-datos-personales',
  templateUrl: './form-datos-personales.component.html',
  styleUrls: ['./form-datos-personales.component.scss']
})
export class FormDatosPersonalesComponent implements OnInit {
  appName = AppConfig.APP_NAME;
  formTratamiento: FormGroup;
  idFile;
  fileValid = false;
  uploading = false;
  constructor(private fb: FormBuilder,
              public uploader: UploadFileService,
              private dialog: MatDialog,
              private router: Router,
              private repositoryTratamientoService: RepositoryTratamientoService,
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
    this.repositoryTratamientoService.createPolitica(politica)
      .subscribe(data => {
        console.log(data);
        this.succesDialog(data.message)
          .afterClosed()
          .subscribe(() => {
            this.router.navigateByUrl(`/${ RoutingPath.APP_ROUTING.pages.administrador.path }/${ RoutingPathAdmin.LOGGED_IN_ROUTING.pages.tratamiento.path }`);
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
