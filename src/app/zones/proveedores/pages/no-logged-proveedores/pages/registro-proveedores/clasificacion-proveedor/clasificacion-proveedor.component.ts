import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {RegisterProveedoresService} from '../../../../../services/register-proveedores/register-proveedores.service';
import {Observable} from 'rxjs';
import {ClasificacionProveedorChecks, SpecialitiesCheckBox} from '../../../../../../../interfaces/clasificacion-proveedor-checks';
import {MatCheckboxChange} from '@angular/material';

@Component({
  selector: 'app-clasificacion-proveedor',
  templateUrl: './clasificacion-proveedor.component.html',
  styleUrls: ['./clasificacion-proveedor.component.scss']
})
export class ClasificacionProveedorComponent implements OnInit {
  checkBox$: Observable<ClasificacionProveedorChecks[]>;
  ArrayIdChecked: number[] = [];
  @Output() idCheckBox: EventEmitter<number[]> = new EventEmitter<number[]>();
constructor(public _registerProveedores: RegisterProveedoresService) {
  this.checkBox$ = this._registerProveedores.obtenerClasificacionProveedor();
}
  ngOnInit() {
  }
  changedCheckBox(event: MatCheckboxChange, index: number, check: SpecialitiesCheckBox) {
      if (event.checked) {
        this.ArrayIdChecked.push(check.id);
      } else {
        const indice = this.ArrayIdChecked.indexOf(check.id); // buscar la posicion según el itm y deveolverla :v
        this.ArrayIdChecked.splice(indice, 1);
      }
      console.log(this.ArrayIdChecked);
  }

  emitIds() {
      this.idCheckBox.emit(this.ArrayIdChecked);
  }
}
