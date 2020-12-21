import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {MatDialog} from '@angular/material';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {RegisterProveedoresService} from '../../../../services/register-proveedores/register-proveedores.service';
import {ClasificacionProveedor} from '../../../../../../interfaces/clasificacion-proveedor';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {RegisterProveedor} from '../../../../../../interfaces/forms/register-proveedor';
import {AutocompleteService} from '../../../../../../services/autocomplete/autocomplete.service';
import {Location} from '@angular/common';
import {ColombianNomenclatureComponent} from '../../../../../../shared/colombian-nomenclature/colombian-nomenclature.component';

@Component({
  selector: 'app-registro-proveedores',
  templateUrl: './registro-proveedores.component.html',
  styleUrls: ['./registro-proveedores.component.scss']
})
export class RegistroProveedoresComponent implements OnInit {
  form: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  idCheckboxs: number[];
  clasificacionArray: ClasificacionProveedor[] = [];
  form5: FormGroup;
  idPolitic: number;
  ArrPhones: number[] = [];
  @ViewChild(FormGroupDirective) myNgForm: FormGroupDirective;
  recaptcha: string;
  constructor(private fb: FormBuilder,
              private location: Location,
              private dialog: MatDialog,
              private _autoComplete: AutocompleteService,
              private  _register: RegisterProveedoresService,
              public _loading: LoadingService) { }

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.form = this.fb.group({
      tipo_identificacion: ['', [Validators.required]],
      identificacion_tributaria: ['', [Validators.required]],
      digito_verficacion: [{value: '', disabled: true}, [Validators.required]],
      razon_social: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      representante_legal_nombre: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      representante_legal_nombre2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      representante_legal_apellido: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      representante_legal_apellido2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      numero_telefonico: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      extension: ['', []],
      celular: ['', []],
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      departamento: ['', [Validators.required]],
      municipio: [{value: '', disabled: true}, [Validators.required]],
      direccion: ['', [Validators.required]]
    });
    this.form2 = this.fb.group({
      tipo_persona: ['', [Validators.required]],
      regimen_iva: ['', [Validators.required]],
      regimen_renta: ['', [Validators.required]],
      regimen_especial: [{value: '', disabled: true}, [Validators.required]]
    });
    this.form3 = this.fb.group({
      nivel_endeudamiento: ['', [Validators.required]],
      pasivo_total: ['', [Validators.required]],
      activo_corriente: ['', [Validators.required]],
      pasivo_corriente: ['', [Validators.required]]
    });
    this.form5 = this.fb.group({
      'Solicitud de incripción': ['', [Validators.required]],
      'Certificado de experiencia': ['', [Validators.required]],
      'Certificado de origen de fondos': ['', [Validators.required]],
      'Certificado persona natural 2017': ['', [Validators.required]],
      'Rut (año en curso)': ['', [Validators.required]],
      'Camara de comercio (no superior a 30 dias)': ['', [Validators.required]],
      'Certificado experiencia 1': ['', [Validators.required]],
      'Certificado experiencia 2': ['', [Validators.required]],
      'Certificado experiencia 3': ['', [Validators.required]],
      'Certificación bancaria': ['', [Validators.required]],
      'Estados financieros': ['', [Validators.required]],
      autorizacion: ['', [Validators.requiredTrue]],
      recaptcha: ['', [Validators.required]]
    });
  }

  reciveIdCheckbox(event: number[]) {
    this.idCheckboxs = event;
    console.log(this.idCheckboxs);
  }

  reciveIdAndFiles(event: ClasificacionProveedor[]) {
    this.clasificacionArray = event;
    console.log(this.clasificacionArray);
  }

  crearProveedor() {
    this.dialog.open(DialogConfirmComponent,
      {
        data: {
          title: 'Confirmar transacción',
          content: '¿Confirma la creación de la petición?'
        }
      })
      .afterClosed()
      .subscribe(result => {
          if (result) {
            const form: RegisterProveedor = {
              formId: 19,
              generalInformation: {
                address: this.form.get('direccion').value,
                cityId: this._autoComplete.selectedTownId,
                departmentId: this._autoComplete.selectedStateId,
                companyName: this.form.get('razon_social').value,
                email: this.form.get('email').value,
                identification: this.form.get('identificacion_tributaria').value,
                identificationTypeId: this.form.get('tipo_identificacion').value,
                legalRepresentativeLastName1: this.form.get('representante_legal_apellido').value,
                legalRepresentativeLastName2: this.form.get('representante_legal_apellido2').value,
                legalRepresentativeName1: this.form.get('representante_legal_nombre').value,
                legalRepresentativeName2: this.form.get('representante_legal_nombre2').value,
                mobile: this.form.get('celular').value,
                nit: this.form.get('identificacion_tributaria').value,
                phoneNumber: this.form.get('numero_telefonico').value
              },
              taxInfo: {
                personTypeId: this.form2.get('tipo_persona').value.toString(),
                taxRegimenId:  this.form2.get('regimen_iva').value.toString(),
                regimesTypeIds:  this.form2.get('regimen_renta').value,
                otherRegimeId: this.form2.get('regimen_especial').value,
              },
              financialClassification: {
                liquidity: {
                  activeCurrent: this.form3.get('activo_corriente').value,
                  pasiveCurrent: this.form3.get('pasivo_corriente').value,
                },
                indebtedness: {
                  totalPasive: this.form3.get('pasivo_total').value,
                  value: this.form3.get('nivel_endeudamiento').value
                }
              },
              providerClassificationIds: this.idCheckboxs,
              providerRequiredFiles: this.clasificacionArray,
              politicId: this.idPolitic
            };
            this._register.registrarProveedor(form)
              .subscribe(data => {
                this.succesDialog(data.body.message);
                this.myNgForm.resetForm();
                this.form.enable();
                console.log(data);
              }, err => {
                this.form.enable();
              });
          }
        });
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
