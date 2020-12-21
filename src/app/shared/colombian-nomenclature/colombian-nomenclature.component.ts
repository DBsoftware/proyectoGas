import {Component, Inject, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-colombian-nomenclature',
  templateUrl: './colombian-nomenclature.component.html',
  styleUrls: ['./colombian-nomenclature.component.scss']
})
export class ColombianNomenclatureComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public control: AbstractControl) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group(
      {
        tipo_via_principal: ['',  []],
        numero_via_principal: ['', []],
        primera_letra_via_principal: ['', []],
        segunda_letra_via_principal: ['', []],
        tercera_letra_via_principal: ['', []],
        numero_via_secundaria: ['' , []],
        primera_letra_via_secundaria: ['', []],
        numero_via_complementaria: ['', []],
        primera_letra_via_complementaria: ['', []],
      }
    );
  }


}
