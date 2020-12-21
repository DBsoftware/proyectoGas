import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {AppConfig} from '../../../../../../config/app-config';
import {ConfigAdmin} from '../../../../../administrador/config/config-admin';
import {Observable} from 'rxjs';
import {TipoIdentificacionSelect} from '../../../../../../interfaces/tipo-identificacion-select';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {CurrentPoliticService} from '../../../../../../services/current-politic/current-politic.service';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {BioResiduosEspecialesNocompatables} from '../../../../../../interfaces/bio-residuos-especiales-nocompatables';
import {TipoNaturaleza} from '../../../../../../interfaces/tipo-naturaleza';
import {ListarServiciosSelects} from '../../../../../../interfaces/listar-servicios-selects';
import {ResiduosEspeciales} from '../../../../../../interfaces/residuos-especiales';
import {ResiduosEspecialesNocompactablesService} from '../../../../services/no-logged/residuos-especiales-nocompactables/residuos-especiales-nocompactables.service';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-bio-residuos-especiales-nocompactables-clientes',
  templateUrl: './bio-residuos-especiales-nocompactables-clientes.component.html',
  styleUrls: ['./bio-residuos-especiales-nocompactables-clientes.component.scss']
})
export class BioResiduosEspecialesNocompactablesClientesComponent implements OnInit {
  @ViewChild(FormGroupDirective) myNgForm: FormGroupDirective;
  form: FormGroup;
  tipoIdentifacion$: Observable<TipoNaturaleza[]>;
  listServices$: Observable<ListarServiciosSelects[]>;
  idPolitic: number;
  idFilePolitic: number;
  textButton = 'GUARDAR';
  recaptcha: string;
  displayedColumns: string[] = ['servicio', 'cantidad', 'valor_unitario', 'total', 'acciones'];
  dataSource: MatTableDataSource<BioResiduosEspecialesNocompatables> = new MatTableDataSource<BioResiduosEspecialesNocompatables>();
  toDataSource: BioResiduosEspecialesNocompatables[] = [];
  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private change: ChangeDetectorRef,
              private _selects: SelectsService,
              public _loading: LoadingService,
              private _residuos: ResiduosEspecialesNocompactablesService,
              private _currentPolitic: CurrentPoliticService,
              public _loadingService: LoadingService) {
  }

  ngOnInit() {
    this.createForm();
    this.tipoIdentifacion$ = this._selects.getTipoNaturaleza();
    this.listServices$ = this._selects.getListarServicios();
  }


  reciveIdPolitic(event) {
    this.idPolitic = event;
  }

  createForm() {
    this.form = this.fb.group({
      tipo_naturaleza: ['', [Validators.required]],
      identificacion: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      nombre: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      nombre2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      apellido: ['', [Validators.required, Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      apellido2: ['', [Validators.pattern(RegularExpressions.ALPHABETIC_SPANISH_REGEX)]],
      email: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      telefono: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      deseo_recibir: [false, []],
      listado_servicios: ['', []],
      valor_unitario: ['', []],
      cantidad: ['', []],
      autorizacion: ['', [Validators.requiredTrue]],
      recaptcha: ['', [Validators.required]]
    });
  }


  addRow() {
    this.toDataSource.push({
      servicio: this.form.get('listado_servicios').value,
      valor_unitario: this.form.get('valor_unitario').value,
      cantidad: this.form.get('cantidad').value,
      total: (Number(this.form.get('cantidad').value) * Number(this.form.get('valor_unitario').value)).toString()
    });

    this.dataSource.data = this.toDataSource;
    this.form.patchValue(
      {
        listado_servicios: '',
        valor_unitario: '',
        cantidad: ''
      }
    );

    this.form.get('listado_servicios').reset();
    this.form.get('valor_unitario').reset();
    this.form.get('cantidad').reset();
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
                  const arrayData = [];
                  for (let i = 0; i < this.dataSource.data.length; i++)  {
                    arrayData.push(
                      {
                        serviceSpecialAndNonCompactableWasteId: this.dataSource.data[i].servicio,
                        unitValue: this.dataSource.data[i].valor_unitario,
                        quantity:  this.dataSource.data[i].cantidad
                      });
                  }
                    const form: ResiduosEspeciales = {
                      formId: 15,
                      typeNatureId: this.form.get('tipo_naturaleza').value,
                      identification: this.form.get('identificacion').value,
                      name1: this.form.get('nombre').value.toString(),
                      name2: this.form.get('nombre2').value,
                      lastName1: this.form.get('apellido').value,
                      lastName2: this.form.get('apellido2').value,
                      email: this.form.get('email').value,
                      phoneNumber: this.form.get('telefono').value.toString(),
                      mobile: this.form.get('celular').value.toString(),
                      sendEmailNotification: this.form.get('deseo_recibir').value,
                      serviceItems: arrayData,
                      politicId: this.idPolitic,
                      recaptchaToken: this.recaptcha
                    };
          this.textButton = 'GUARDANDO...';
          this.form.disable();
           this._residuos.setResiduo(form)
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
