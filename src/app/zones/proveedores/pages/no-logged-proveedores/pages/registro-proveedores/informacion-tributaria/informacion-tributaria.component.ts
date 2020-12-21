import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SelectsService} from '../../../../../../../services/selects/selects.service';
import {Observable} from 'rxjs';

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

  enableOtherRegimen(option) {
    console.log(option);
    const arrSelection =  <Array<number>>this.form.get('regimen_renta').value;
    for (const control of arrSelection)  {
      if (control === 4) {
        this.form.get('regimen_especial').enable();
      } else {
        this.form.get('regimen_especial').disable();
        this.form.get('regimen_especial').setValue('');
      }
    }
  }

}
