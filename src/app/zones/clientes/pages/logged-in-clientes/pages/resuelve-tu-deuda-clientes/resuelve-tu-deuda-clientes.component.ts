import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {Observable} from 'rxjs';
import {TipoIdentificacionSelect} from '../../../../../../interfaces/tipo-identificacion-select';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {AppConfig} from '../../../../../../config/app-config';
import {ConfigAdmin} from '../../../../../administrador/config/config-admin';
import {MatDialog} from '@angular/material';
import {CurrentPoliticService} from '../../../../../../services/current-politic/current-politic.service';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {UserClientesService} from '../../../../services/user-clientes/user-clientes.service';
import {CodigoSuscripcion} from '../../../../../../interfaces/codigo-suscripcion';
import {ResuelveDeudaClientes} from '../../../../../../interfaces/forms/resuelve-deuda-clientes';
import {ResuelveTuDeudaClientesService} from '../../../../services/logged-in/resuelve-tu-deuda-clientes/resuelve-tu-deuda-clientes.service';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';
import {LoadingService} from '../../../../../../services/loading/loading.service';

@Component({
  selector: 'app-resuelve-tu-duda-clientes',
  templateUrl: './resuelve-tu-deuda-clientes.component.html',
  styleUrls: ['./resuelve-tu-deuda-clientes.component.scss']
})
export class ResuelveTuDeudaClientesComponent implements OnInit {
  formResuelveTuDeuda: FormGroup;
  @ViewChild(FormGroupDirective) myNgForm;
  tipoId$: Observable<TipoIdentificacionSelect[]>;
  codigoCliente$: Observable<CodigoSuscripcion[]>;
  recaptcha: string;
  idPolitic: number;
  idFilePolitic: number;
  formDisable = false;
  idUser: number;
  nombre: any;
  textButton = 'GUARDAR';
  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              public _loading: LoadingService,
              private _resuelveDebt: ResuelveTuDeudaClientesService,
              private _userCliente: UserClientesService,
              private _currentPolitic: CurrentPoliticService,
              public _selects: SelectsService) {
    this.tipoId$ = this._selects.getTipodeId();
  }

  ngOnInit() {
    this.createForm();
    this._userCliente.getUserData()
      .subscribe(user => {
        this.idUser = user.userId;
        this.nombre = { name1: user.name1, name2: user.name2, lastName1: user.lastName1, lastName2: user.lastName2 };

        this.formResuelveTuDeuda.patchValue(
          {
            primer_nombre: this.nombre.name1,
            segundo_nombre: this.nombre.name2,
            primer_apellido: this.nombre.lastName1,
            segundo_apellido: this.nombre.lastName2
          });
        this.codigoCliente$ = this._selects.getSuscriptionCodes(this.idUser);
      }, err => {
        console.log(err);
      });
  }

  reciveIdPolitic(event) {
    this.idPolitic = event;
  }

  createForm(): void {
    this.formResuelveTuDeuda = this.fb.group({
      codigo_cliente: ['', [Validators.required]],
      tipo_identificacion: ['', [Validators.required]],
      identificacion: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      primer_nombre: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      segundo_nombre: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      primer_apellido: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      segundo_apellido: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      edad_mora: ['', [Validators.required]],
      valor_deuda: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      celular: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      direccion: ['', [Validators.required]],
      propuesta: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      autorizacion: ['', [Validators.requiredTrue]],
      recaptcha: ['', [Validators.required]]
    });
  }

  recaptchaResolved(event) {
    this.recaptcha = event;
  }



  consultar() {
    this.dialog.open(DialogConfirmComponent,
      {
        data: {
          title: 'Confirmar transacción',
          content: '¿Confirma la creación de la petición?'
        }
      })
      .afterClosed()
      .subscribe(result => {
        if (result && this.formResuelveTuDeuda.valid) {

            const resuelveDeudaClientes: ResuelveDeudaClientes = {
              formId: 3,
              userSubscriptionCode: this.formResuelveTuDeuda.get('codigo_cliente').value,
              identificationType: this.formResuelveTuDeuda.get('tipo_identificacion').value,
              identification: this.formResuelveTuDeuda.get('identificacion').value.toString(),
              name1: this.formResuelveTuDeuda.get('primer_nombre').value,
              name2: this.formResuelveTuDeuda.get('segundo_nombre').value,
              lastName1: this.formResuelveTuDeuda.get('primer_apellido').value,
              lastName2: this.formResuelveTuDeuda.get('segundo_apellido').value,
              debtAge: this.formResuelveTuDeuda.get('edad_mora').value,
              debtValue: this.formResuelveTuDeuda.get('valor_deuda').value,
              email: this.formResuelveTuDeuda.get('email').value,
              address: this.formResuelveTuDeuda.get('direccion').value,
              mobile: this.formResuelveTuDeuda.get('celular').value.toString(),
              phoneNumber: this.formResuelveTuDeuda.get('telefono').value.toString(),
              proposal: this.formResuelveTuDeuda.get('propuesta').value,
              politicId: this.idPolitic,
              recaptchaToken: this.recaptcha
            };
              this.textButton = 'GUARDANDO..';
              this.formResuelveTuDeuda.disable();
            this._resuelveDebt.createRequestSolveDebt(resuelveDeudaClientes)
              .subscribe(data => {
                this.succesDialog(data.body.message);
                this.myNgForm.resetForm();
                this.formResuelveTuDeuda.enable();
                this.textButton = 'GUARDAR';
                console.log(data);
              }, err => {
                this.formResuelveTuDeuda.enable();
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
