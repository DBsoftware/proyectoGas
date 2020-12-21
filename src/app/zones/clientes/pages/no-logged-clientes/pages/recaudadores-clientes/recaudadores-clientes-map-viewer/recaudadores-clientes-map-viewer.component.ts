import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-recaudadores-clientes-map-viewer',
  templateUrl: './recaudadores-clientes-map-viewer.component.html',
  styleUrls: ['./recaudadores-clientes-map-viewer.component.scss']
})
export class RecaudadoresClientesMapViewerComponent implements OnChanges {
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
    this.map.setZoom(15);
  }

}
