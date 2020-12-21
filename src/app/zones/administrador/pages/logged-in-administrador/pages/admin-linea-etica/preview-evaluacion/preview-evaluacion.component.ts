import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {RowTableEtica} from '../../../../../../../interfaces/linea-etica-table';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegularExpressions} from '../../../../../../../class/regular-expressions';

@Component({
  selector: 'app-preview-evaluacion',
  templateUrl: './preview-evaluacion.component.html',
  styleUrls: ['./preview-evaluacion.component.scss']
})
export class PreviewEvaluacionComponent implements OnInit {
  form: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: RowTableEtica,
              public dialogRef: MatDialogRef<PreviewEvaluacionComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      novedad: ['', [Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      fecha_ocurrido: ['', []],
      lugar_hechos: ['', [Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      tiempo_sucediendo: ['', [Validators.pattern(RegularExpressions.ALPHA_NUMERIC_REGEX)]],
      tiempo_sucediendo_select: ['', []],
      radio_conocimiento_empresa: [{value: '', disabled: true}, []],
      nombres_personas_concimento_empresa: ['', []],
      adjuntos: ['', []],
      radio_desea_registrar_datos: [{value: '', disabled: true}, []],
      cliente_nombre: ['', []],
      cliente_nombre2: ['', []],
      cliente_apellido: ['', []],
      cliente_apellido2: ['', []],
      telefono: ['', []],
      grupo_interes: ['', []],
      otro_grupo: ['', []],
      correo: ['', [Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
      recaptcha: ['', []]
    });
  }

  cerrar() {
    this.dialogRef.close();
  }

}
