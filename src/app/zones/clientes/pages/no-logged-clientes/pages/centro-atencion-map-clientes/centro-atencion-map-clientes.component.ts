import { Component, OnInit } from '@angular/core';
import {MapCentroAtencionService} from '../../../../services/no-logged/map-centro-atencion/map-centro-atencion.service';
import { PuntosAtencion} from '../../../../../../interfaces/puntos-atencion';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-centro-atencion-map-clientes',
  templateUrl: './centro-atencion-map-clientes.component.html',
  styleUrls: ['./centro-atencion-map-clientes.component.scss']
})
export class CentroAtencionMapClientesComponent implements OnInit {
  /**
   * Centrar mapa en
   */
  map: any;
  lat = 4.1248423;
  lng = -73.6440795;
  countIsOpen = 0;
  mapCentroAtencion$: Observable<PuntosAtencion[]>;
  pointMap: PuntosAtencion;
  previusWindow = null;
  constructor(private _mapCentroAtencion: MapCentroAtencionService) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }

  ngOnInit() {
   this.mapCentroAtencion$ = this._mapCentroAtencion.getList();
  }

  mapReady(map) {
    this.map = map;
  }

  isOpen(isOpen: boolean, infoWindow) {
    if (isOpen && this.countIsOpen === 0) {
      this.previusWindow = infoWindow;
      this.countIsOpen++;
    }
    return isOpen;
  }
  selectMarker(eventWindow) {
    if (this.previusWindow) {
      this.previusWindow.close();
    }
    this.previusWindow = eventWindow;
  }


  sendPoints(point: PuntosAtencion) {
    if (this.map) {
        this.lat = point.latitude;
        this.lng = point.longitude;
        this.map.setCenter({ lat: Number(point.latitude), lng: Number(point.longitude) });
        this.map.setZoom(15);
        this.pointMap = point;

        console.log(point);
    }
}


}
