import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {Observable} from 'rxjs';
import {CodigoSuscripcion} from '../../../../../../interfaces/codigo-suscripcion';
import {UserClientesService} from '../../../../services/user-clientes/user-clientes.service';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {ProcesoSelect} from '../../../../../../interfaces/proceso-select';
import {FrecuenciaRecoleccionService} from '../../../../services/logged-in/frecuencia-recoleccion/frecuencia-recoleccion.service';
import { RowRecoleccion} from '../../../../../../interfaces/frecuencia-recoleccion';

@Component({
  selector: 'app-bio-frecuencia-recoleccion-barrido-clientes',
  templateUrl: './bio-frecuencia-recoleccion-barrido-clientes.component.html',
  styleUrls: ['./bio-frecuencia-recoleccion-barrido-clientes.component.scss']
})
export class BioFrecuenciaRecoleccionBarridoClientesComponent implements OnInit {
  form: FormGroup;
  procesoSelect$: Observable<ProcesoSelect[]>;
  tipoSuscripcion$: Observable<CodigoSuscripcion[]>;
  suscriptionCode: string;
  idProcces: number;
  formdisable:  boolean;
  userId: number;
  recaptcha: string;
  coords: any;
  dataDatable: RowRecoleccion[];
  constructor(private dialog: MatDialog,
              private change: ChangeDetectorRef,
              private _selects: SelectsService,
              private fb: FormBuilder,
              private _frecuenciaRecoleccion: FrecuenciaRecoleccionService,
              private _user: UserClientesService,
              public _loadingService: LoadingService) { }

  ngOnInit() {
    this.createForm();
    this.procesoSelect$ = this._selects.getProcessOfRecoletion();
    this._user.getUserData()
      .subscribe(user => {
        this.userId = user.userId;
        this.tipoSuscripcion$ = this._selects.getSuscriptionCodes(user.userId);
      }, err => {
        this.form.disable();
        this.formdisable = true;
      });
  }

  createForm() {
    this.form = this.fb.group({
      codigo_cliente: ['', [Validators.required]],
      proceso: ['', [Validators.required]],
      recaptcha: ['', [Validators.required]]
    });
  }

  recaptchaResolved(event) {
    this.recaptcha = event;
  }

  /**
   * Haceu na petición para c
   */
  consultar() {
    this.dialog.open(DialogConfirmComponent,
      {
        data: {
          title: 'Confirmar transacción',
          content: '¿Confirma la transacción?'
        }
      })
      .afterClosed()
      .subscribe(result => {
        if (result && this.form.valid && this.recaptcha !== null) {
            this._frecuenciaRecoleccion.getDatatableData(this.suscriptionCode, this.idProcces)
              .subscribe(data => {
                this.dataDatable = data.content;
              });
        }
      });
  }

  tipoSucripcion(option: CodigoSuscripcion) {
    this.suscriptionCode = option.code;
  }

  procesoSelect(option: ProcesoSelect) {
    this.idProcces = option.id;
  }

  recieveCoords(event) {
    this.coords = event;
    console.log(event);
  }

}
