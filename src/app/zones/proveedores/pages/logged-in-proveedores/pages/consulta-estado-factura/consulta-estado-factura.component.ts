import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {MatDialog, PageEvent} from '@angular/material';
import {ResultadoConsultaDatasource} from './resultado-consulta-datasource';
import {ConsultaDeduccionesDatasource} from './consulta-deducciones-datasource';
import {ConsultaEstadoFacturaService} from '../../../../services/consulta-estado-factura/consulta-estado-factura.service';

@Component({
  selector: 'app-consulta-estado-factura',
  templateUrl: './consulta-estado-factura.component.html',
  styleUrls: ['./consulta-estado-factura.component.scss']
})
export class ConsultaEstadoFacturaComponent implements OnInit {

  tipoIdentifacion$: Observable<any>;
  form: FormGroup;
  recaptcha: string;
  dataSource = new ResultadoConsultaDatasource(this._consultaFactura);
  dataSource2 = new ConsultaDeduccionesDatasource(this._consultaFactura);
  displayedColumns = ['fecha_radicacion', 'nombre_proveedor', 'entidad_pagadas', 'no_facturas', 'valor', 'banco', 'cuenta_bancaria', 'estado_factura', 'fecha_pago'];
  displayedColumnsTable2 = ['descripcion', 'valor_base', 'deduccion'];

  constructor(private _selects: SelectsService,
              public _loadingService: LoadingService,
              private dialog: MatDialog,
              private _consultaFactura: ConsultaEstadoFacturaService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.tipoIdentifacion$ = this._selects.getTipodeId();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      fecha_inicial: ['', [Validators.required]],
      fecha_final: ['', [Validators.required]],
      recaptcha: ['', [Validators.required]]
    });
  }


  paginate(event: PageEvent) {
    this.dataSource.paginate(this.form.get('fecha_inicial').value,
      this.form.get('fecha_final').value,
      event.pageSize.toString(),
      event.pageIndex.toString());
  }


  paginate2(event: PageEvent) {
    this.dataSource2.paginate(this.form.get('fecha_inicial').value,
      this.form.get('fecha_final').value,
      event.pageSize.toString(),
      event.pageIndex.toString());
  }

  recaptchaResolved(event) {
    this.recaptcha = event;
  }

  consultar() {
    if (this.form.valid) {
      this.dataSource.getData(this.form.get('fecha_inicial').value, this.form.get('fecha_final').value);
      this.dataSource2.getData(this.form.get('fecha_inicial').value, this.form.get('fecha_final').value);
    }
  }
}
