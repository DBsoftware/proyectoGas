import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {RegularExpressions} from '../../../../../../../class/regular-expressions';
import {ClasificacionProveedor} from '../../../../../../../interfaces/clasificacion-proveedor';
import {Location} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AutocompleteService} from '../../../../../../../services/autocomplete/autocomplete.service';
import {RegisterProveedoresService} from '../../../../../../proveedores/services/register-proveedores/register-proveedores.service';
import {LoadingService} from '../../../../../../../services/loading/loading.service';
import {ActiveAccountProveedoresService} from '../../../../../services/logged-in/pages/active-account-proveedores/active-account-proveedores.service';
import {ProviderRequiredFiles} from '../../../../../../../interfaces/data-proveedores';

@Component({
  selector: 'app-modal-register-proveedores',
  templateUrl: './modal-register-proveedores.component.html',
  styleUrls: ['./modal-register-proveedores.component.scss']
})
export class ModalRegisterProveedoresComponent implements OnInit {
  form: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  listClassification: Array<{ description: string }>;
  documentacionAdjuntaArr: ProviderRequiredFiles[];
  form5: FormGroup;
  idPolitic: number;
  recaptcha: string;
  suscription: any;

  constructor(private fb: FormBuilder,
              private location: Location,
              private dialog: MatDialog,
              public dialogRef: MatDialogRef<ModalRegisterProveedoresComponent>,

              @Inject(MAT_DIALOG_DATA) public userId: number,
              public _loading: LoadingService,
              private _autoComplete: AutocompleteService,
              private  _proveedores: ActiveAccountProveedoresService,) {
  }

  ngOnInit() {
    this.createForm();
    this.suscription = this._proveedores.getProviderData(this.userId)
      .subscribe(user => {
        if (user) {
          this.form.patchValue({
            identificacion_tributaria: user.generalInformation.nit,
            razon_social: user.generalInformation.companyName,
            representante_legal_nombre: user.generalInformation.legalRepresentativeName1,
            representante_legal_nombre2: user.generalInformation.legalRepresentativeName2,
            representante_legal_apellido: user.generalInformation.legalRepresentativeLastName1,
            numero_telefonico: user.generalInformation.phoneNumber,
            email: user.generalInformation.email,
            celular: user.generalInformation.mobile,
            departamento: user.generalInformation.department,
            municipio: user.generalInformation.city,
            direccion: user.generalInformation.address
          });
        }
        this.form2.patchValue({
          tipo_persona: user.taxInfo.personType,
          regimen_iva: user.taxInfo.taxRegimen,
          regimen_renta: user.taxInfo.regimesTypes,
          regimen_especial: user.taxInfo.otherRegimeId
        });
        this.form3.patchValue({
          nivel_endeudamiento: user.financialClassification.indebtedness.value,
          pasivo_total: user.financialClassification.indebtedness.totalPasive,
          activo_corriente: user.financialClassification.liquidity.activeCurrent,
          pasivo_corriente: user.financialClassification.liquidity.pasiveCurrent
        });
        this.listClassification = user.providerClassification;
        this.documentacionAdjuntaArr = user.providerRequiredFiles;
      });
  }

  createForm() {
    this.form = this.fb.group({
      identificacion_tributaria: ['', [Validators.required]],
      razon_social: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      representante_legal_nombre: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      representante_legal_nombre2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      representante_legal_apellido: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      representante_legal_apellido2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      numero_telefonico: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      celular: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      departamento: ['', [Validators.required]],
      municipio: ['', [Validators.required]],
      direccion: ['', [Validators.required]]
    });
    this.form2 = this.fb.group({
      tipo_persona: ['', [Validators.required]],
      regimen_iva: ['', [Validators.required]],
      regimen_renta: ['', [Validators.required]],
      regimen_especial: ['', [Validators.required]]
    });
    this.form3 = this.fb.group({
      nivel_endeudamiento: ['', [Validators.required]],
      pasivo_total: ['', [Validators.required]],
      activo_corriente: ['', [Validators.required]],
      pasivo_corriente: ['', [Validators.required]]
    });
  }

  cerrar() {
    this.dialogRef.close();
    this.suscription.unsubscribe();
  }
}
