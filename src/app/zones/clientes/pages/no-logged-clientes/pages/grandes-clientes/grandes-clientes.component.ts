import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {MatDialog} from '@angular/material';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {CurrentPoliticService} from '../../../../../../services/current-politic/current-politic.service';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {AppConfig} from '../../../../../../config/app-config';
import {ConfigAdmin} from '../../../../../administrador/config/config-admin';
import {Observable} from 'rxjs';
import {TipoIdentificacionSelect} from '../../../../../../interfaces/tipo-identificacion-select';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {GrandesClientesSolicitud} from '../../../../../../interfaces/forms/grandes-clientes-solicitud';
import {GrandesClientesSolicitudService} from '../../../../services/no-logged/grandes-clientes-solicitud/grandes-clientes-solicitud.service';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';
import {SolucionEnergetica} from '../../../../../../interfaces/solucion-energetica';
import {FormValidators} from '../../../../../../class/form-validators';

@Component({
  selector: 'app-grandes-clientes',
  templateUrl: './grandes-clientes.component.html',
  styleUrls: ['./grandes-clientes.component.scss']
})
export class GrandesClientesComponent implements OnInit {
  form: FormGroup;
  @ViewChild(FormGroupDirective) myNgForm: FormGroupDirective;
  tipoIdentifacion$: Observable<TipoIdentificacionSelect[]>;
  solucionEnergetica$: Observable<SolucionEnergetica[]>;
  idPolitic: number;
  idFilePolitic: number;
  textButton = 'GUARDAR';
  recaptcha: string;

  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private _selects: SelectsService,
              private _grandesClientes: GrandesClientesSolicitudService,
              private _currentPolitic: CurrentPoliticService,
              public _loadingService: LoadingService) { }

  ngOnInit() {
    this.createForm();
    this.tipoIdentifacion$ = this._selects.getTipodeId();
    this.solucionEnergetica$ = this._selects.getSolucionEnergetic();
  }

  reciveIdPolitic(event) {
    this.idPolitic = event;
  }

  createForm() {
    this.form = this.fb.group({
      tipo_identificacion: ['', [Validators.required]],
      identificacion_tributaria: ['', [Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      empresa: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      cargo: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      nombre: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      nombre2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      apellido: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      apellido2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      telefono: ['', [Validators.maxLength(15)]],
      celular: ['', [Validators.required, Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      email_rectificar: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      solucion_energetica: ['', [Validators.required]],
      otra_solucion: [{value: '', disabled: true}, [Validators.required]],
      deseo_recibir: [false, []],
      autorizacion: ['', [Validators.requiredTrue]],
      recaptcha: ['', [Validators.required]]
    },
      {validator: FormValidators.checkEquivalent('email', 'email_rectificar') }
    );
  }


  recaptchaResolved(event) {
    this.recaptcha = event;
  }

  guardar() {
    this.dialog.open(DialogConfirmComponent,
      {
        data: {
          title: 'Confirmar transacción',
          content: '¿Confirma la creación de la petición?'
        }
      })
      .afterClosed()
      .subscribe(result => {
        if (result && this.form.valid) {
           const form: GrandesClientesSolicitud = {
                      formId: 9,
                      identificationType: this.form.get('tipo_identificacion').value,
                      taxIdentification: this.form.get('identificacion_tributaria').value.toString(),
                      companyName: this.form.get('empresa').value,
                      charge: this.form.get('cargo').value,
                      name1: this.form.get('nombre').value,
                      lastName1: this.form.get('apellido').value,
                      email: this.form.get('email').value,
                      auxEmail: this.form.get('email_rectificar').value,
                      mobile: this.form.get('celular').value.toString(),
                      phoneNumber: this.form.get('telefono').value.toString(),
                      typeEnergeticSolutionId: this.form.get('solucion_energetica').value,
                      typeEnergeticSolutionByUser: this.form.get('otra_solucion').value,
                      sendEmailNotification: this.form.get('deseo_recibir').value,
                      politicId: this.idPolitic,
                      recaptchaToken: this.recaptcha
                    };
          this.textButton = 'GUARDANDO...';
          this.form.disable();
           this._grandesClientes.setServiceRequest(form)
                 .subscribe(data => {
                   this.succesDialog(data.body.message);
                   this.myNgForm.resetForm();
                   this.form.enable();
                   this.textButton = 'GUARDAR';
                   console.log(data);
                 }, err => {
                   console.log(err);
                   this.form.enable();
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

  enableOtherOpcion(option: SolucionEnergetica) {
    if (option.id === 10) {
      this.form.get('otra_solucion').enable();
    } else {
      this.form.get('otra_solucion').disable();
      this.form.get('otra_solucion').setValue('');
    }
  }

}
