import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FinanciacionData} from '../../../../../../../interfaces/financiacion-data';
import {CalculoConsumo} from '../../../../../../../interfaces/calculo-consumo';
import {RegularExpressions} from '../../../../../../../class/regular-expressions';
import {EstratoSelect} from '../../../../../../../interfaces/estrato-select';
import {SelectsService} from '../../../../../../../services/selects/selects.service';
import {SimuladorService} from '../../../../../services/no-logged/simulador/simulador.service';
import {GasodomesticType} from '../../../../../../../interfaces/gasodomestic-type';
import {VentasComerciosService} from '../../../../../services/no-logged/ventas-comercios/ventas-comercios.service';
import {FinancingAndSocioEconomic} from '../../../../../../../interfaces/financing-and-socio-economic';

@Component({
  selector: 'app-ventas-comercios-simulacion-clientes',
  templateUrl: './ventas-comercios-simulacion-clientes.component.html',
  styleUrls: ['./ventas-comercios-simulacion-clientes.component.scss']
})
export class VentasComerciosSimulacionClientesComponent implements OnInit {
  form: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  categoria$: Observable<any>;
  gasodomesticType$: Observable<GasodomesticType[]>;
  financingParameterId: number;
  estratoId: number;
  plazoMeses: number;
  displayColumsVinculacion: string[] = ['instalacion_interna', 'cargo_conexion'];
  displayColumsFinanciacion: string[] = ['primera_cuouta', 'cuota_normal'];
  displayColumsCalculoConsumo: string[] = ['consumo_estimado', 'categoria', 'consumo'];
  idSelectedCategoria: number;
  gasodomesticId: number;
  dataSourceForm1: FinancingAndSocioEconomic[] = [];
  dataSourceForm2: FinanciacionData[] = [];
  dataSourceForm3: CalculoConsumo[] = [];
  constructor(private fb: FormBuilder,
              private _ventasComercios: VentasComerciosService,
              private _simulador: SimuladorService,
              private _select: SelectsService) { }

  ngOnInit() {
    this.gasodomesticType$ = this._select.getGasoDomesticType();
    this.categoria$ = this._select.getGasoDomesticCategory();
    this.createForm();
    this._simulador.getParametersOfType('VENTAS-COMERCIOS')
      .subscribe(data => {
        if (data) {
          this.financingParameterId = data.id;
          this.plazoMeses = data.maxInstallments;
           this.form2.get('plazo_meses').setValidators(Validators.max(this.plazoMeses));
        }
      });
  }
  createForm() {
    this.form =  this.fb.group({
      categoria: ['', [Validators.required]]
    });
    this.form2 = this.fb.group({
      plazo_meses: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]],
      cuota_inicial: ['', [Validators.required, Validators.pattern(RegularExpressions.NUMBER_REGEX)]]
    });
    this.form3 = this.fb.group( {
      tipo_gasodomestico: ['', [Validators.required]],
    });
  }


  /**
   * Paso 1 consultar las tarifas
   * @param event
   */
  changeSelectionCategoria(event) {
    this.estratoId = event.id;
    this._simulador.getConceptsByFinancingParameters(this.financingParameterId, this.estratoId)
      .subscribe(data => {
        if (data) {
          this.dataSourceForm1 =  data;
        } else {
          this.dataSourceForm1 = [];
        }
      });
    this.idSelectedCategoria = event.id;
  }

  /**
   * Paso 2
   */
  consultarFinanciacion() {
    this._simulador.simulate(this.financingParameterId, this.estratoId, this.form2.get('plazo_meses').value, this.form2.get('cuota_inicial').value)
      .subscribe(data => {
        if (data) {
          this.dataSourceForm2 = [
            { primeraCuota: data, cuotaNormalEstimada: data }
          ];
        }
      });
  }


  changeSelectionGasodomestico(event: GasodomesticType) {
    this.gasodomesticId = event.id;
  }

  /**
   * Step 3
   */
  consultarCalculoConsumo() {
    this._ventasComercios.calcularConsumo(this.form3.get('tipo_gasodomestico').value)
      .subscribe(data => {
        console.log(data);
        this.dataSourceForm3 = data;
      });
  }
}
