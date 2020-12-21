import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { RowGvnUbicaciones} from '../../../../../../../interfaces/gnv-ubicaciones';

@Component({
  selector: 'app-gnv-ubicacion-estaciones-clientes-map-viewer',
  templateUrl: './gnv-ubicacion-estaciones-clientes-map-viewer.component.html',
  styleUrls: ['./gnv-ubicacion-estaciones-clientes-map-viewer.component.scss']
})
export class GnvUbicacionEstacionesClientesMapViewerComponent implements OnChanges {
  @Input() mapData: any;
  map: any;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.mapData = changes.mapData.currentValue;
    if (this.map) {
      this.map.setZoom(15);
    }
  }

  mapReady(map) {

    this.map = map;
    setTimeout(() => {
      this.map.setZoom(15);
      this.map.setCenter({lat:  this.mapData.lat, lng: this.mapData.long});
    }, 250);
  }

}
