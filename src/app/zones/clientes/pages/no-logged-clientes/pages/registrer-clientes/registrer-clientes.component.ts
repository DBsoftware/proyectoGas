import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AppConfig} from '../../../../../../config/app-config';
import {MatDialog, MatTableDataSource, MatTooltip} from '@angular/material';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {AuthZonesService} from '../../../../../../services/auth-zones/auth-zones.service';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {CurrentPoliticService} from '../../../../../../services/current-politic/current-politic.service';
import {UserRegistrer, UserSuscription} from '../../../../../../interfaces/forms/user-registrer';
import {ClientesConfig} from '../../../../config/clientes-config';
import {ConfigAdmin} from '../../../../../administrador/config/config-admin';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {TipoIdentificacionSelect} from '../../../../../../interfaces/tipo-identificacion-select';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {RelacionPropiedad} from '../../../../../../interfaces/relacion-propiedad';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {CodeRegister} from '../../../../../../interfaces/code-register';


@Component({
  selector: 'app-registrer-clientes',
  templateUrl: './registrer-clientes.component.html',
  styleUrls: ['./registrer-clientes.component.scss']
})
export class RegistrerClientesComponent implements OnInit {
  @ViewChild('myTooltip') tooltip: MatTooltip;
  logo = AppConfig.APP_LOGO;
  registrerForm: FormGroup;
  autorizacionForm: FormGroup;
  textButtonRegistrer = 'REGISTRAR';
  captchaToken: string;
  idPolitic: number;
  idFilePolitic: number;
  displayedColumns: string[] = ['relacion', 'codigo', 'direccion', 'acciones'];
  relacion_propiedad$: Observable<RelacionPropiedad[]>;
  tipo_id$: Observable<TipoIdentificacionSelect[]>;
  dataSource: MatTableDataSource<UserSuscription> = new MatTableDataSource<UserSuscription>();
  toDataSource: UserSuscription[] = [];




  constructor(private formBuilder: FormBuilder,
              private router: Router,
              public _loadingService: LoadingService,
              private location: Location,
              private _selects: SelectsService,
              private dialog: MatDialog,
              private _currentPolitic: CurrentPoliticService,
              private _authService: AuthZonesService) {
    this.createForm();
  }

  ngOnInit() {
    this.tipo_id$ = this._selects.getTipodeId();
    this.relacion_propiedad$ = this._selects.getTiporelacionPropiedad();
    this.registrerForm.get('add_code')
      .valueChanges
      .subscribe(control => {
        if (control.relacion_propiedad !== '' && control.codigo_del_cliente !== '' && control.direccion_predio !== '') {
          this.tooltip.show();
            console.log(this.tooltip.hideDelay);
          console.log(this.tooltip.showDelay);
        }
      });
  }

  createForm(): void {
    this.registrerForm = this.formBuilder.group({
        tipo_identificacion: ['', [Validators.required]],
        identificacion: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
        nombre1: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
        nombre2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
        apellido1: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
        apellido2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
        email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
        phone: ['', [Validators.required]],
        add_code: this.formBuilder.group(
          {
            relacion_propiedad: ['', [Validators.required]],
            codigo_del_cliente: ['', [Validators.required]],
            direccion_predio: ['', [Validators.required]]
          }
        )
      });
    this.autorizacionForm = this.formBuilder.group({
        autorizacion_personal_data: [false, [Validators.requiredTrue]],
        recaptcha: ['', [Validators.required]]
      });
  }

  reciveIdPolitic(politicId: number) {
    this.idPolitic = politicId;
  }



  registrerUser() {
    this.dialog.open(DialogConfirmComponent,
      {
        data: {
          title: 'Confirmar transacción',
          content: '¿Confirma la creación de la cuenta de usuario?'
        }
      })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          if (this.registrerForm.valid && this.autorizacionForm.valid) {
            const user: UserRegistrer = {
              identification: this.registrerForm.get('identificacion').value.toString(),
              email: this.registrerForm.get('email').value,
              phoneNumber: this.registrerForm.get('phone').value,
              identificationTypeId: this.registrerForm.get('tipo_identificacion').value,
              name1: this.registrerForm.get('nombre1').value,
              name2: this.registrerForm.get('nombre2').value,
              lastName1: this.registrerForm.get('apellido1').value,
              lastName2: this.registrerForm.get('apellido2').value,
              userSubscriptions: this.dataSource.data,
              politicId: this.idPolitic,
              captchaToken: this.captchaToken
            };
            this.registrerForm.disable();
            this.autorizacionForm.disable();
            this.textButtonRegistrer = 'REGISTRANDO...';
             this._authService.registrerUserZone(ClientesConfig.ZONE_PREFIX, ClientesConfig.ZONE_ID, user)
               .subscribe(resultado => {
                 this.textButtonRegistrer = 'REGISTRAR';
                    if (resultado) {
                      this.openSuccessDialog(resultado.message);
                    }
               }, () => {
                 this.textButtonRegistrer = 'REGISTRAR';
                 this.registrerForm.enable();
                 this.autorizacionForm.enable();
               });
          }
        }
      });
  }

  recaptchaResolved(event) {
    this.captchaToken = event;
  }


  openSuccessDialog(message: string) {
    this.dialog.open(SuccessDialogComponent,
      { data: {
          message: message
      }
      }).afterClosed()
      .subscribe(result => {
        this.goBack();
      });
  }

  addCode() {
    this.toDataSource.push({
      relationshipPropertyId: this.registrerForm.get('add_code').get('relacion_propiedad').value,
      code: this.registrerForm.get('add_code').get('codigo_del_cliente').value,
      address: this.registrerForm.get('add_code').get('direccion_predio').value
    });

    this.dataSource.data = this.toDataSource;
    this.registrerForm.get('add_code')
      .patchValue(
      {
        relacion_propiedad: '',
        codigo_del_cliente: '',
        direccion_predio: ''
      }
    );
    if (this.dataSource.data.length > 0) {
      this.registrerForm.get('add_code').get('relacion_propiedad').setValidators(null);
      this.registrerForm.get('add_code').get('relacion_propiedad').setErrors(null);
      this.registrerForm.get('add_code').get('codigo_del_cliente').setValidators(null);
      this.registrerForm.get('add_code').get('codigo_del_cliente').setErrors(null);
      this.registrerForm.get('add_code').get('direccion_predio').setValidators(null);
      this.registrerForm.get('add_code').get('direccion_predio').setErrors(null);
    } else {
      this.registrerForm.get('add_code').get('relacion_propiedad').setValidators(Validators.required);
      this.registrerForm.get('add_code').get('relacion_propiedad').setErrors({required: true});
      this.registrerForm.get('add_code').get('codigo_del_cliente').setValidators(Validators.required);
      this.registrerForm.get('add_code').get('codigo_del_cliente').setErrors({required: true});
      this.registrerForm.get('add_code').get('direccion_predio').setValidators(Validators.required);
      this.registrerForm.get('add_code').get('direccion_predio').setErrors({required: true});
    }
    this.tooltip.show(5000);
  }

  removeRow(index: number) {
    this.toDataSource.splice(index, 1); // splice does not need reasigned to another array
    this.dataSource.data = this.toDataSource;
    if (this.dataSource.data.length > 0) {
      this.registrerForm.get('add_code').get('relacion_propiedad').setValidators(null);
      this.registrerForm.get('add_code').get('relacion_propiedad').setErrors(null);
      this.registrerForm.get('add_code').get('codigo_del_cliente').setValidators(null);
      this.registrerForm.get('add_code').get('codigo_del_cliente').setErrors(null);
      this.registrerForm.get('add_code').get('direccion_predio').setValidators(null);
      this.registrerForm.get('add_code').get('direccion_predio').setErrors(null);
    } else {
      this.registrerForm.get('add_code').get('relacion_propiedad').setValidators(Validators.required);
      this.registrerForm.get('add_code').get('relacion_propiedad').setErrors({required: true});
      this.registrerForm.get('add_code').get('codigo_del_cliente').setValidators(Validators.required);
      this.registrerForm.get('add_code').get('codigo_del_cliente').setErrors({required: true});
      this.registrerForm.get('add_code').get('direccion_predio').setValidators(Validators.required);
      this.registrerForm.get('add_code').get('direccion_predio').setErrors({required: true});
    }
  }

  goBack() {
    this.location.back();
  }
}
