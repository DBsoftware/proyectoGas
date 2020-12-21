import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {SelectsService} from '../../../../../../../../services/selects/selects.service';

@Component({
  selector: 'app-informacion-tributaria',
  templateUrl: './informacion-tributaria.component.html',
  styleUrls: ['./informacion-tributaria.component.scss']
})
export class InformacionTributariaComponent implements OnInit {
  @Input() form: FormGroup;
  tipoPersona$: Observable<any>;
  tipoIva$: Observable<any>;
  regimenIva$: Observable<any>;
  regimenRenta$: Observable<any>;
  constructor(private fb: FormBuilder,
              private  _selects: SelectsService) { }

  ngOnInit() {
    this.tipoPersona$ = this._selects.obtenerTipoDePersona();
    this.tipoIva$ = this._selects.obtenerTipoDeIva();
    this.regimenIva$ = this._selects.obtenerRegimenDeIva();
    this.regimenRenta$ = this._selects.obtenerRegimenDeRents();
  }

}
