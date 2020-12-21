import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {UploadFileService} from '../../../../../../services/upload/upload-file.service';
import {AppConfig} from '../../../../../../config/app-config';
import {Observable} from 'rxjs';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';
import {MatDialog} from '@angular/material';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {CurrentPoliticService} from '../../../../../../services/current-politic/current-politic.service';
import {PqrClientes} from '../../../../../../interfaces/forms/pqr-clientes';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {CodigoSuscripcion} from '../../../../../../interfaces/codigo-suscripcion';
import {TipoIdentificacionSelect} from '../../../../../../interfaces/tipo-identificacion-select';
import {PqrClientesService} from '../../../../services/logged-in/pqr-clientes/pqr-clientes.service';
import {UserClientesService} from '../../../../services/user-clientes/user-clientes.service';
import {FormValidators} from '../../../../../../class/form-validators';

@Component({
  selector: 'app-pqr-clientes',
  templateUrl: './pqr-clientes.component.html',
  styleUrls: ['./pqr-clientes.component.scss']
})
export class PqrClientesComponent implements OnInit {
  @ViewChild(FormGroupDirective) myNgForm;
  formPqr: FormGroup;
  idPolitic: number;
  captchaToken: string;
  textButton = 'GUARDAR';
  codigoCliente$: Observable<CodigoSuscripcion[]>;
  tipo_id$: Observable<TipoIdentificacionSelect[]>;
  filesId: number[] = [];
  idUser: number;
  names: {name: string, secondName: string};
  lastName: {lastName: string, lastName2: string};
  urlToUpload = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/asresource`;

  constructor(private  fb: FormBuilder,
              public _loading: LoadingService,
              public _selectService: SelectsService,
              private dialog: MatDialog,
              private _userCliente: UserClientesService,
              private uploader: UploadFileService,
              public _loadingService: LoadingService,
              private _currentPolitic: CurrentPoliticService,
              private _pqrClientes: PqrClientesService) {
    this.createForm();
    this.tipo_id$ = this._selectService.getTipodeId();
  }

  ngOnInit() {


    this._userCliente.getUserData()
      .subscribe(user => {
        const name = user.name1;
        const secondName = user.name2;
        const lastName = user.lastName1;
        const lastName2 = user.lastName2;
        this.idUser = user.userId;
        this.names = { name, secondName };
        this.lastName = {lastName, lastName2};
        this.formPqr.patchValue(
          {
            nombre: this.names.name,
            nombre2: this.names.secondName,
            apellido: this.lastName.lastName,
            apellido2: this.lastName.lastName2
          });
        this.codigoCliente$ = this._selectService.getSuscriptionCodes(this.idUser);
      }, err => {
        console.log(err);
      });
  }

  createForm(): void {
    this.formPqr = this.fb.group({
        codigo_cliente: ['', [Validators.required]],
        tipo_identificacion: ['', [Validators.required]],
        identificacion: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
        nombre: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
        nombre2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
        apellido: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
        apellido2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
        celular: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
        numero_telefonico: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
        email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
        confirmar_email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
        email_remitente: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
        observaciones: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
        adjuntos: ['', []],
        autorizacion: ['', [Validators.requiredTrue]],
        recaptcha: ['', Validators.required],
      },
      {validator: FormValidators.checkEquivalent('email', 'confirmar_email')}
    );
  }

  reciveIdPolitic(event) {
      this.idPolitic = event;
  }

  reciveIdFiles(event: number[]) {
    this.filesId = event;
  }



  recaptchaResolved(event) {
    this.captchaToken = event;
  }

  crearPQR() {
    this.dialog.open(DialogConfirmComponent,
      {
        data: {
          title: 'Confirmar transacción',
          content: '¿Confirma la creación de la PQR?'
        }
      })
      .afterClosed()
      .subscribe(result => {
        if (this.formPqr.valid && result) {
          const user: PqrClientes = {
            formId: 1,
            userSubscriptionCode: this.formPqr.get('codigo_cliente').value,
            identificationType: this.formPqr.get('tipo_identificacion').value,
            identification: this.formPqr.get('identificacion').value.toString(),
            name1: this.formPqr.get('nombre').value,
            name2: this.formPqr.get('nombre2').value,
            lastName1: this.formPqr.get('apellido').value,
            lastName2: this.formPqr.get('apellido2').value,
            mobile: this.formPqr.get('celular').value.toString(),
            phoneNumber: this.formPqr.get('numero_telefonico').value.toString(),
            email: this.formPqr.get('email').value,
            emailAux: this.formPqr.get('confirmar_email').value,
            emailSender: this.formPqr.get('email_remitente').value,
            observations: this.formPqr.get('observaciones').value,
            fileIds: this.filesId,
            politicId: this.idPolitic,
            recaptchaToken: this.captchaToken
          };
          this.formPqr.disable();
          this.textButton = 'GUARDANDO...';
          this._pqrClientes.createPQR(user)
            .subscribe(data => {
              this.textButton = 'GUARDAR';
              this.succesDialog(data.body.message);
              this.formPqr.enable();
              this.myNgForm.resetForm();
            }, err => {
              this.formPqr.enable();
              this.textButton = 'GUARDAR';
            });
        }
      });
  }
  succesDialog(message: string) {
    return this.dialog.open(SuccessDialogComponent, {
      data: {
        message: message,
      }
    });
  }

}
