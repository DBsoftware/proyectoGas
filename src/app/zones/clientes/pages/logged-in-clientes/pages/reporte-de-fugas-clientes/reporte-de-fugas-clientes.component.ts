import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {Observable} from 'rxjs';
import {CodigoSuscripcion} from '../../../../../../interfaces/codigo-suscripcion';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {TipoIdentificacionSelect} from '../../../../../../interfaces/tipo-identificacion-select';
import {TipoFuga} from '../../../../../../interfaces/forms/tipo-fuga';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {AppConfig} from '../../../../../../config/app-config';
import {ConfigAdmin} from '../../../../../administrador/config/config-admin';
import {MatDialog} from '@angular/material';
import {CurrentPoliticService} from '../../../../../../services/current-politic/current-politic.service';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {UserClientesService} from '../../../../services/user-clientes/user-clientes.service';
import {ReporteFugasService} from '../../../../services/logged-in/reporte-fugas/reporte-fugas.service';
import {ReporteDeFugas} from '../../../../../../interfaces/forms/reporte-de-fugas';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-reporte-de-fugas-clientes',
  templateUrl: './reporte-de-fugas-clientes.component.html',
  styleUrls: ['./reporte-de-fugas-clientes.component.scss']
})
export class ReporteDeFugasClientesComponent implements OnInit {
  @ViewChild(FormGroupDirective) myNgForm;
  formFugas: FormGroup;
  recaptcha: string;
  textButton = 'GUARDAR';
  codigoCliente$: Observable<any>;
  tipo_id$: Observable<TipoIdentificacionSelect[]>;
  tipo_fuga$: Observable<TipoFuga[]>;
  idPolitic: number;
  idFile: number;
  userId: number;
  nombre: any;
  constructor(private fb: FormBuilder,
              private _select: SelectsService,
              private dialog: MatDialog,
              private _user: UserClientesService,
              private _reporte: ReporteFugasService,
              private _currentPolitic: CurrentPoliticService,
              public _loadingService: LoadingService) {
    this.tipo_id$ = this._select.getTipodeId();
    this.tipo_fuga$ = this._select.getTipoDeFuga();
    this.createForm();
  }

  ngOnInit() {
    this._user.getUserData()
      .subscribe(data => {
        this.userId = data.userId;
          this.nombre = { name1: data.name1, name2: data.name2, lastName1: data.lastName1, lastName2: data.lastName2 };
        this.codigoCliente$ = this._select.getSuscriptionCodes(this.userId);
        this.formFugas.patchValue(
          {
            nombre: this.nombre.name1,
            nombre2: this.nombre.name2,
            apellido: this.nombre.lastName1,
            apellido2: this.nombre.lastName2
        });
      });
  }

   reciveIdPolitic(event) {
    this.idPolitic = event;
   }


  createForm(): void {
    this.formFugas = this.fb.group({
      codigo_cliente: [''],
      tipo_identificacion: ['', [Validators.required]],
      identificacion: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      nombre: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      nombre2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      apellido: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      apellido2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      direccion: ['', [Validators.required]],
      barrio: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      celular: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      telefono: ['', [Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      tipo_fuga: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      autorizacion: ['', [Validators.requiredTrue]],
      recaptcha: ['', [Validators.required]]
    });
  }

  recaptchaResolved(event) {
    this.recaptcha = event;
  }


  crearReporteFuga() {
    this.dialog.open(DialogConfirmComponent,
      {
        data: {
          title: 'Confirmar transacción',
          content: '¿Confirma la creación del reporte de fuga?'
        }
      })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.textButton = 'GUARDANDO...';
          const reporte: ReporteDeFugas = {
            formId: 2,
            userSubscriptionCode: this.formFugas.get('codigo_cliente').value,
            identificationType: this.formFugas.get('tipo_identificacion').value,
            identification: this.formFugas.get('identificacion').value,
            name1: this.formFugas.get('nombre').value,
            name2: this.formFugas.get('nombre2').value,
            lastName1: this.formFugas.get('apellido').value,
            lastName2: this.formFugas.get('apellido2').value,
            neighborhood: this.formFugas.get('barrio').value,
            address: this.formFugas.get('direccion').value,
            mobile: this.formFugas.get('celular').value,
            phoneNumber: this.formFugas.get('telefono').value,
            typeOfLeakId: this.formFugas.get('tipo_fuga').value,
            email: this.formFugas.get('email').value,
            politicId: this.idPolitic,
            recaptchaToken: this.formFugas.get('recaptcha').value
          };
          this.formFugas.disable();
          this.textButton = 'GUARDANDO...';
          this._reporte.createReporte(reporte)
            .subscribe(response => {
              this.succesDialog(response.body.message);
              this.myNgForm.resetForm();
              this.formFugas.enable();
              this.textButton = 'GUARDAR';
            }, err => {
              this.textButton = 'GUARDAR';
              console.error(err);
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
