import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {Observable} from 'rxjs';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {EvaluacionDesempenoService} from '../../../../../administrador/services/logged-in/pages/evaluacion-desempeno/evaluacion-desempeno.service';
import {EvaluacionDesempenoProveedoresService} from '../../../../services/evaluacion-desempeno-proveedores/evaluacion-desempeno-proveedores.service';
import {tap} from 'rxjs/operators';
import {EvaluacionProveedoresList} from '../../../../../../interfaces/evaluacion-proveedores-list';
import {ProviderRequiredFiles} from '../../../../../../interfaces/data-proveedores';
import {PdfViewerComponent} from '../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {AppConfig} from '../../../../../../config/app-config';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-evaluacion-desempeno-proveedores',
  templateUrl: './evaluacion-desempeno-proveedores.component.html',
  styleUrls: ['./evaluacion-desempeno-proveedores.component.scss']
})
export class EvaluacionDesempenoProveedoresComponent implements OnInit {
  form: FormGroup;
  yearsList$: Observable<number[]>;
  listPDF$: Observable<EvaluacionProveedoresList[]>;

  constructor(private fb: FormBuilder,
              public _evaluacion: EvaluacionDesempenoProveedoresService,
              public _loading: LoadingService,
              private dialog: MatDialog,
              private _selects: SelectsService) { }
  ngOnInit() {
    this.createForm();
     this.yearsList$ = this._evaluacion.obtenerListaAnos()
       .pipe(
         tap(data => {
           this.form.get('year').enable();
         }, err => {
           this.form.get('year').disable();

         })
       );
  }
  createForm() {
      this.form = this.fb.group({
      year: [{value: '', disabled: true}, [Validators.required]],
      recaptcha: ['', [Validators.required]]
    });
  }
  consultar() {
    if (this.form.valid && !this.form.get('year').disabled) {
      this.listPDF$ = this._evaluacion.obtenerPorAno(this.form.get('year').value);
    }
  }

  viewPDF(item: EvaluacionProveedoresList) {
      console.log(item);
      this.dialog.open(PdfViewerComponent, {
        minWidth: '90vw',
        minHeight: '68vh',
        data: {
          url: `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/${ item.file.id }/stream`
        }
      });
  }

}
