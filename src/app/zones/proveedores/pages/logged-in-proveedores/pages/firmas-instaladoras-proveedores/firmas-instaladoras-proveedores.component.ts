import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {TipoNaturaleza} from '../../../../../../interfaces/tipo-naturaleza';
import {ListarServiciosSelects} from '../../../../../../interfaces/listar-servicios-selects';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {BioResiduosEspecialesNocompatables} from '../../../../../../interfaces/bio-residuos-especiales-nocompatables';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {ResiduosEspecialesNocompactablesService} from '../../../../../clientes/services/no-logged/residuos-especiales-nocompactables/residuos-especiales-nocompactables.service';
import {CurrentPoliticService} from '../../../../../../services/current-politic/current-politic.service';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {ResiduosEspeciales} from '../../../../../../interfaces/residuos-especiales';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';
import {TableFirmasInstaladoras} from '../../../../../../interfaces/table-firmas-instaladoras';
import {AppConfig} from '../../../../../../config/app-config';
import {AutocompleteService} from '../../../../../../services/autocomplete/autocomplete.service';
import {TipoIdentificacionSelect} from '../../../../../../interfaces/tipo-identificacion-select';
import {FirmasInstaladorasProv, HelpInformacion} from '../../../../../../interfaces/forms/firmas-instaladoras-prov';
import {FirmasInstaladorasService} from '../../../../services/firmas-instaladoras/firmas-instaladoras.service';
import * as _moment from 'moment';

@Component({
  selector: 'app-firmas-instaladoras-proveedores',
  templateUrl: './firmas-instaladoras-proveedores.component.html',
  styleUrls: ['./firmas-instaladoras-proveedores.component.scss']
})
export class FirmasInstaladorasProveedoresComponent implements OnInit {
  @ViewChild(FormGroupDirective) myNgForm: FormGroupDirective;
  form: FormGroup;
  urlToUpload = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/asresource`;
  tipoIdentifacion$: Observable<TipoIdentificacionSelect[]>;
  actividadEconomica$: Observable<any>;
  listServices$: Observable<ListarServiciosSelects[]>;
  idPolitic: number;
  idAutorizacion: number;
  idFilePolitic: number;
  textButton = 'GUARDAR';
  recaptcha: string;
  displayedColumns: string[] = ['cargo', 'nombres', 'identificacion', 'no_certificado', 'adjuntos', 'acciones'];
  dataSource: MatTableDataSource<TableFirmasInstaladoras> = new MatTableDataSource<TableFirmasInstaladoras>();
  toDataSource: TableFirmasInstaladoras[] = [];
  recivedIdFiles: number[] = [];
  helpInformation: HelpInformacion[] = [];
  filteredState$: Observable<any>;
  filteredStateRepesentante$: Observable<any>;
  filteredMunicipio$: Observable<any>;
  filteredMunicipioRepresentante$: Observable<any>;
  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private change: ChangeDetectorRef,
              private _selects: SelectsService,
              public _autocomplete: AutocompleteService,
              private _firmas: FirmasInstaladorasService,
              public _loadingService: LoadingService) {
  }

  ngOnInit() {
    this.createForm();
    this.tipoIdentifacion$ = this._selects.getTipodeId();
    this.listServices$ = this._selects.getListarServicios();
    this.actividadEconomica$ = this._selects.obtenerActividadEconomica();
    this.filteredState$ = this._autocomplete.controlToFilter(
      this.form.get('departamento'),
      `${AppConfig.API_DOMAIN}:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/divpola/searchdepartmentbydescription`,
      AppConfig.yParam);
   this._autocomplete.departmentSearched$
     .subscribe(searched => {
       if (searched) {
         this.filteredMunicipio$ = this._autocomplete.controlToFilter(
           this.form.get('ciudad'),
           `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/divpola/department/${ this._autocomplete.selectedStateCode }/towns/searchtownbydescription`,
           AppConfig.yParam);
       }
       });
    this.filteredStateRepesentante$ = this._autocomplete.controlToFilter(
      this.form.get('departamento_representante'),
      `${AppConfig.API_DOMAIN}:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/divpola/searchdepartmentbydescription`,
      AppConfig.yParam);
      this._autocomplete.departmentSearched$
      .subscribe(searched => {
        if (searched) {
          this.filteredMunicipioRepresentante$ = this._autocomplete.controlToFilter(
            this.form.get('ciudad_representante'),
            `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/divpola/department/${ this._autocomplete.selectedStateRepresentanteCode }/towns/searchtownbydescription`,
            AppConfig.yParam);
        }
      });
  }

  reciveIdTratamiento(event) {
    this.idAutorizacion = event;

  }
  reciveIdPolitic(event) {
    this.idPolitic = event;
  }

  createForm() {
    this.form = this.fb.group({
      tipo_identificacion_tributaria: ['', [Validators.required]],
      identificacion_tributaria: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      razon_social: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      fecha_constitucion: ['', [Validators.required]],
      actividad_economica: ['', [Validators.required]],
      codigo_sic: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      direccion_oficina: ['', [Validators.required]],
      direccion_correspondencia: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      numero_telefonico: ['', [Validators.required, Validators.maxLength(7)]],
      numero_fax: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      ciudad: [{value: '', disabled: true}, [Validators.required]],
      nombre_representante_legal: ['', [Validators.required]],
      nombre2_representante_legal: ['', []],
      apellido_representante_legal: ['', [Validators.required]],
      apellido2_representante_legal: ['', []],
      tipo_identificacion: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
      direccion_residencia: ['', [Validators.required]],
      barrio: ['', [Validators.required]],
      numero_telefonico_contacto: ['', [Validators.required]],
      numero_telefonico_fax: ['', [Validators.required]],
      departamento_representante: ['', [Validators.required]],
      ciudad_representante: [{value: '', disabled: true}, []],
      cargo: ['', [Validators.required]],
      nombre_colaborador: ['', [Validators.required]],
      nombre2_colaborador: ['', []],
      apellido_colaborador: ['', [Validators.required]],
      apellido2_colaborador: ['', []],
      identificacion_colaborador: ['', [Validators.required]],
      no_cerficiado_laboral: ['', [Validators.required]],
      adjuntos: ['', []],
      autorizacion: ['', [Validators.requiredTrue]],
      recaptcha: ['', [Validators.required]]
    });
  }



  reciveIdFiles(arrId: number[]) {
    this.recivedIdFiles = arrId;
  }


  addRow() {
    this.form.get('cargo').markAsTouched();
    this.form.get('nombre_colaborador').markAsTouched();
    this.form.get('apellido_colaborador').markAsTouched();
    this.form.get('identificacion_colaborador').markAsTouched();
    this.form.get('no_cerficiado_laboral').markAsTouched();
    this.form.get('adjuntos').markAsTouched();

    if ((this.form.get('cargo').value !== '' && this.form.get('cargo').value !==  null) &&
      (this.form.get('nombre_colaborador').value !== '' && this.form.get('nombre_colaborador').value !== null) &&
      (this.form.get('apellido_colaborador').value !== '' && this.form.get('apellido_colaborador').value !== null) &&
      (this.form.get('identificacion_colaborador').value !== '' && this.form.get('identificacion_colaborador').value !== null) &&
      (this.form.get('no_cerficiado_laboral').value !== '' && this.form.get('no_cerficiado_laboral').value !== null)) {
      if (this.recivedIdFiles.length > 0) {
        this.toDataSource.push({
          cargo: this.form.get('cargo').value,
          nombres_apellidos: `${this.form.get('nombre_colaborador').value} ${ this.form.get('nombre2_colaborador').value } ${ this.form.get('apellido_colaborador').value } ${ this.form.get('apellido2_colaborador').value }`,
          identificacion: this.form.get('identificacion_colaborador').value,
          no_certificado: this.form.get('no_cerficiado_laboral').value,
          adjunto: `${ this.recivedIdFiles.length } Archivo`,
        });
        this.dataSource.data = this.toDataSource;
        for (const item of this.dataSource.data) {
          this.helpInformation.push({
            jobTitle: item.cargo,
            identification: item.identificacion,
            laborCertification: item.no_certificado,
            names: item.nombres_apellidos,
            fileId: this.recivedIdFiles[0]
          });
        }
        this.form.get('cargo').setValue('');
        this.form.get('nombre_colaborador').setValue('');
        this.form.get('nombre2_colaborador').setValue('');
        this.form.get('apellido_colaborador').setValue('');
        this.form.get('apellido2_colaborador').setValue('');
        this.form.get('identificacion_colaborador').setValue('');
        this.form.get('no_cerficiado_laboral').setValue('');
        this.form.get('adjuntos').setValue(null);
        this.form.get('cargo').setErrors(null);
        this.form.get('nombre_colaborador').setErrors(null);
        this.form.get('nombre2_colaborador').setErrors(null);
        this.form.get('apellido_colaborador').setErrors(null);
        this.form.get('apellido2_colaborador').setErrors(null);
        this.form.get('identificacion_colaborador').setErrors(null);
        this.form.get('no_cerficiado_laboral').setErrors(null);
        this.form.get('adjuntos').setErrors(null);
      } else {
        this.form.get('adjuntos').setErrors({ required: true });
      }
    } else {
       this.form.get('cargo').value === '' ?  this.form.get('cargo').setErrors({ required: true }) : this.form.get('cargo').setErrors(null);
      this.form.get('nombre_colaborador').value === '' ?  this.form.get('nombre_colaborador').setErrors({ required: true }) : this.form.get('nombre_colaborador').setErrors(null);
      this.form.get('apellido_colaborador').value === '' ?  this.form.get('apellido_colaborador').setErrors({ required: true }) : this.form.get('apellido_colaborador').setErrors(null);
      this.form.get('identificacion_colaborador').value === '' ?  this.form.get('identificacion_colaborador').setErrors({ required: true }) : this.form.get('identificacion_colaborador').setErrors(null);
      this.form.get('no_cerficiado_laboral').value === '' ?  this.form.get('no_cerficiado_laboral').setErrors({ required: true }) : this.form.get('no_cerficiado_laboral').setErrors(null);
      if (this.recivedIdFiles.length === 0) {
        this.form.get('adjuntos').value === '' ?  this.form.get('adjuntos').setErrors({ required: true }) : this.form.get('adjuntos').setErrors(null);
      }
    }
  }

  removeRow(index: number) {
    this.toDataSource.splice(index, 1); // splice does not need reasigned to another array
    this.dataSource.data = this.toDataSource;

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
          const form: FirmasInstaladorasProv = {
            formId: 20,
            identificationTypeId: this.form.get('tipo_identificacion_tributaria').value,
            taxIdentification: this.form.get('identificacion_tributaria').value,
            startDate:  _moment(this.form.get('fecha_constitucion').value).format('YYYY-MM-DD'),
            economicActivityId: this.form.get('actividad_economica').value,
            sicCode: this.form.get('codigo_sic').value,
            companyName: this.form.get('razon_social').value,
            contactInformation: {
              mainAddress:   this.form.get('direccion_oficina').value,
                correspondenceAddress: this.form.get('direccion_oficina').value,
                email: this.form.get('direccion_oficina').value,
                phoneNumber: this.form.get('direccion_oficina').value,
                faxNumber: this.form.get('direccion_oficina').value,
                departmentId: this._autocomplete.selectedStateId,
                cityId: this._autocomplete.selectedTownId,
            },
            legalRepresentativeInformation: {
              name1: this.form.get('nombre_representante_legal').value,
              name2: this.form.get('nombre2_representante_legal').value,
              lastName1: this.form.get('apellido_representante_legal').value,
              lastName2: this.form.get('apellido2_representante_legal').value,
              identificationTypeId: this.form.get('tipo_identificacion').value,
              identification: this.form.get('identificacion').value,
              address: this.form.get('direccion_residencia').value,
              neigthborhood: this.form.get('barrio').value,
              phoneNumber: this.form.get('numero_telefonico_contacto').value,
              faxNumber: this.form.get('numero_telefonico_fax').value,
              departamentId: this._autocomplete.selectedStateRepresentanteId,
              cityId: this._autocomplete.selectedTownRepresentanteId
            },
            politicId: this.idPolitic,
            autorizationId: this.idAutorizacion,
            recaptchaToken: this.recaptcha,
            helpersInformation: this.helpInformation

          };
          this.textButton = 'GUARDANDO...';
          this.form.disable();
          this._firmas.crearFirma(form)
            .subscribe(data => {
              this.succesDialog(data.body.message);
              this.myNgForm.resetForm();
              this.form.enable();
              this.dataSource.data = [];
              this.textButton = 'GUARDAR';
              console.log(data);
            }, err => {
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

}
