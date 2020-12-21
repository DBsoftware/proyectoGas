import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-clasificacion-proveedor',
  templateUrl: './clasificacion-proveedor.component.html',
  styleUrls: ['./clasificacion-proveedor.component.scss']
})
export class ClasificacionProveedorComponent implements OnInit {
   @Input() list: Array<{description: string}>;
  constructor() { }

  ngOnInit() {
  }

}
