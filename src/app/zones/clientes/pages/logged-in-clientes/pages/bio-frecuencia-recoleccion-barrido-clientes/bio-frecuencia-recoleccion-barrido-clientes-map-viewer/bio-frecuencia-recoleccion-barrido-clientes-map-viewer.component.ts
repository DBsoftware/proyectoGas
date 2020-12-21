import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-bio-frecuencia-recoleccion-barrido-clientes-map-viewer',
  templateUrl: './bio-frecuencia-recoleccion-barrido-clientes-map-viewer.component.html',
  styleUrls: ['./bio-frecuencia-recoleccion-barrido-clientes-map-viewer.component.scss']
})
export class BioFrecuenciaRecoleccionBarridoClientesMapViewerComponent implements OnChanges {
  @Input() coords: {lat: number, long: number, frequency: string, isOpen: boolean};
  lat: number;
  long: number;
  constructor() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition( pos => {
        this.lat = pos.coords.longitude;
        this.long = pos.coords.latitude;
      });
    }
  }
  ngOnChanges() {
  }

  mapReady(event) {
    console.log(event);
  }

}
