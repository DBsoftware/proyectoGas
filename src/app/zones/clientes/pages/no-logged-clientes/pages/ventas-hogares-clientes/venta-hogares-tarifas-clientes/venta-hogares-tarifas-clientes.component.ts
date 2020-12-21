import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegularExpressions} from '../../../../../../../class/regular-expressions';
import {Observable} from 'rxjs';
import {SelectsService} from '../../../../../../../services/selects/selects.service';
import {VinculacionData} from '../../../../../../../interfaces/vinculacion-data';
import {FinanciacionData} from '../../../../../../../interfaces/financiacion-data';
import {EstratoSelect} from '../../../../../../../interfaces/estrato-select';
import {SimuladorService} from '../../../../../services/no-logged/simulador/simulador.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-venta-hogares-tarifas-clientes',
  templateUrl: './venta-hogares-tarifas-clientes.component.html',
  styleUrls: ['./venta-hogares-tarifas-clientes.component.scss']
})
export class VentaHogaresTarifasClientesComponent implements OnInit {
  estratoSelect$: Observable<EstratoSelect[]>;
  displayColumsVinculacion: string[] = ['instalacion', 'cargo_conexion'];
  displayColumsFinanciacion: string[] = ['primera_cuouta', 'cuota_normal'];
  form: FormGroup;
  form2: FormGroup;
  dataSourceForm1: VinculacionData[] = [];
  dataSourceForm2: FinanciacionData[] = [];
  financingParameterId: number;
  estratoId: number;
  plazoMeses: number;

  constructor(private fb: FormBuilder,
              private _simulador: SimuladorService,
              private _selects: SelectsService) {
  }

  ngOnInit() {
    this.createForm();
    this.estratoSelect$ = this._selects.getEstrato();
    this._simulador.getParametersOfType('VENTAS-HOGARES')
      .subscribe(data => {
        if (data) {
          this.financingParameterId = data.id;
          this.plazoMeses = data.maxInstallments;
        }
      });
  }

  createForm() {
    this.form =  this.fb.group({
      estrato: ['', [Validators.required]]
    });
    this.form2 = this.fb.group({
      plazo_meses: ['', [Validators.required, Validators.max(this.plazoMeses), Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      cuota_inicial: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]]
    });
  }
  selectEstrato(event) {
    this.estratoId = event.id;
    this._simulador.getConceptsByFinancingParameters(this.financingParameterId, this.estratoId)
      .subscribe(data => {
        if (data) {
          this.dataSourceForm1 = [
            { instalacion_interna:  data[1].value.toString(), cargo_conexion: data[0].value.toString() }
          ];
        } else {
          this.dataSourceForm1 = [
            { instalacion_interna:  '', cargo_conexion: '' }
          ];
        }

      });

  }

  consultar() {
    this._simulador.simulate(this.financingParameterId, this.estratoId, this.form2.get('plazo_meses').value, this.form2.get('cuota_inicial').value)
      .subscribe(data => {
        console.log(data);
        if (data) {
          this.dataSourceForm2 = [
            { primeraCuota: data, cuotaNormalEstimada: data }
          ];
        }

      });

  }

}
