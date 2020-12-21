import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FrecuenciaRecoleccion, RowRecoleccion} from '../../../../../../../interfaces/frecuencia-recoleccion';

@Component({
  selector: 'app-bio-frecuencia-recoleccion-barrido-clientes-datatable',
  templateUrl: './bio-frecuencia-recoleccion-barrido-clientes-datatable.component.html',
  styleUrls: ['./bio-frecuencia-recoleccion-barrido-clientes-datatable.component.scss']
})
export class BioFrecuenciaRecoleccionBarridoClientesDatatableComponent implements OnChanges {
  @Input() dataDatable: RowRecoleccion;
  @Output() cordenadas: EventEmitter<any> = new EventEmitter<any>();
  displayedColumns: string[] = ['frecuencia', 'acciones'];
  dataSource;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const data = changes.dataDatable.currentValue;
    if (data) {
      this.dataSource = data;
    }
  }

  showLocation(row: RowRecoleccion) {
    console.log(row);
    this.cordenadas.emit(
      {
        lat: Number(row.latitude),
        long: Number(row.longitude),
        frequency: row.frequency,
        isOpen: true
      });
  }


}
