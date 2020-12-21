import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateAdapter, MatDialog, PageEvent} from '@angular/material';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {Observable} from 'rxjs';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {LineaEticaDatasource} from './linea-etica-datasource';
import {AdmLineaEticaService} from '../../../../services/logged-in/pages/adm-linea-etica/adm-linea-etica.service';
import {RowTableEtica} from '../../../../../../interfaces/linea-etica-table';
import {PreviewEvaluacionComponent} from './preview-evaluacion/preview-evaluacion.component';

@Component({
  selector: 'app-admin-linea-etica',
  templateUrl: './admin-linea-etica.component.html',
  styleUrls: ['./admin-linea-etica.component.scss']
})
export class AdminLineaEticaComponent implements OnInit {
  form: FormGroup;
  listEmpresas$: Observable<any>;
  displayedColumns = ['novedad', 'lugar_hechos', 'tiempo_sucediendo', 'empresa_conocimiento', 'registrar_datos', 'acciones'];
  dataSource: LineaEticaDatasource = new LineaEticaDatasource(this._admLineaEtica);
  constructor(private fb: FormBuilder,
              public _loadingService: LoadingService,
              private _selects: SelectsService,
              private dialog: MatDialog,
              private _admLineaEtica: AdmLineaEticaService,
              private adapter: DateAdapter<Date>) {
    this.adapter.setLocale('co');
    this.listEmpresas$ = this._selects.getTipodeId();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      date_init: [{value: '', disabled: true}, [Validators.required]],
      date_end: [{value: '', disabled: true}, [Validators.required]],
      frist_consecutive: ['', [Validators.required]],
      secound_consecutive: ['', [Validators.required]],
      empresas: ['', [Validators.required]]
    });
  }

  paginate(event: PageEvent) {
    this.dataSource.paginate(event.pageIndex, event.pageSize);
  }

  consultar() {
  }
  /** viewPQRData(row: RowTableEtica) {
    this.dialog.open(PreviewEvaluacionComponent, {
      minWidth: '90vw',
      minHeight: '68vh',
      data: row
    });
  } **/

}
