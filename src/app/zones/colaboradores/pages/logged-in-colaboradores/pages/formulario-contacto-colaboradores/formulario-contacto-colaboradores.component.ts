import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {AppConfig} from '../../../../../../config/app-config';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {MatDialog} from '@angular/material';
import {Observable} from 'rxjs';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {FormularioContactoService} from '../../../../services/formulario-contacto/formulario-contacto.service';
import {FormularioColaboradores} from '../../../../../../interfaces/forms/formulario-colaboradores';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-formulario-contacto-colaboradores',
  templateUrl: './formulario-contacto-colaboradores.component.html',
  styleUrls: ['./formulario-contacto-colaboradores.component.scss']
})
export class FormularioContactoColaboradoresComponent implements OnInit {
  form: FormGroup;
  recapatcha: string;
  @ViewChild(FormGroupDirective) myNgForm: FormGroupDirective;
  idPolitic: number;
  idFiles: number[] = [];
  urlToUpload = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/asresource`;
  appName = AppConfig.APP_NAME;
  categoria$: Observable<any>;
  constructor(private fb: FormBuilder,
              private _selects: SelectsService,
              private dialog: MatDialog,
              private  _formulario: FormularioContactoService,
              public _loadingService: LoadingService) { }

  ngOnInit() {
   this.categoria$ = this._selects.obtenerCategoriasColaboradores();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      categoria: ['', [Validators.required]],
      observaciones: ['', [Validators.required]],
      adjuntos: ['', []],
      autorizacion: [false, [Validators.requiredTrue]],
      recaptcha: ['', [Validators.required]]
    });
  }

  recaptchaResolved(event) {
    this.recapatcha = event;
  }

  reciveIdPolitic(event) {
    this.idPolitic = event;
  }
  reciveIdFiles(event) {
    this.idFiles = event;
  }

  guardar() {
    this.confirmDialog('Confirmar acción', `¿Confirma la creación de la petición?`)
      .afterClosed()
      .subscribe(result => {
        if (result) {
          const form: FormularioColaboradores = {
            contactFormCategoryId: this.form.get('categoria').value,
            fileIds: this.idFiles,
            formId: 21,
            observations: this.form.get('observaciones').value,
            politicId: this.idPolitic
          };
          this._formulario.crearContacto(form)
            .subscribe(data => {
              if (data) {
                this.openSuccessDialog(data.body.message);

              }
            });
        }
      });
  }


  confirmDialog(title: string, message: string) {
    return this.dialog.open(DialogConfirmComponent, {
      data: {
        title: title,
        content: message
      }
    });
  }

  openSuccessDialog(message: string) {
    this.dialog.open(SuccessDialogComponent,
      { data: {
          message: message
        }
      }).afterClosed()
      .subscribe(result => {
        this.myNgForm.resetForm();
      });
  }

}
