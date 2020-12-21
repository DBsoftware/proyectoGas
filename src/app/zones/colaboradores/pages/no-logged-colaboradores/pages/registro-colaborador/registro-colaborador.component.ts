import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {Observable} from 'rxjs';
import {SelectsService} from '../../../../../../services/selects/selects.service';
import {DialogConfirmComponent} from '../../../../../../shared/dialog-confim/dialog-confirm.component';
import {MatDialog} from '@angular/material';
import {Location} from '@angular/common';
import {RegisterColaboradoresService} from '../../../../services/register-colaboradores/register-colaboradores.service';
import {RegisterFormColaboradores} from '../../../../../../interfaces/forms/register-form-colaboradores';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-registro-colaborador',
  templateUrl: './registro-colaborador.component.html',
  styleUrls: ['./registro-colaborador.component.scss']
})
export class RegistroColaboradorComponent implements OnInit {
  form: FormGroup;
  idPolitic: number;
  idTratamiento: number;
  recptcha: string;
  tipoIdentificacion$: Observable<any>;
  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private location: Location,
              private _selects: SelectsService,
              private _register: RegisterColaboradoresService,
              public _loadingService: LoadingService) { }

  ngOnInit() {
    this.tipoIdentificacion$ = this._selects.getTipodeId();
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      tipo_identificacion: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      nombre2: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      apellido2: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefono: ['', []],
      celular: ['', []],
      autorizacion: ['', [Validators.requiredTrue]],
      recaptcha: ['', [Validators.required]]
    });
  }

  reciveIdPolitic(event: number) {
    this.idPolitic = event;
  }

  reciveIdTratamiento(event: number) {
    this.idTratamiento = event;
  }

  recaptchaResolved(event) {
    this.recptcha = event;
  }
  guardar() {
    this.confirmDialog('Confirmar acción',
      `¿Confirma crear el registro del usuario?`)
      .afterClosed()
      .subscribe(result => {
        const form: RegisterFormColaboradores = {
          authorizationId: this.idTratamiento,
          captchaToken: this.recptcha,
          email: this.form.get('email').value,
          identification: this.form.get('identificacion').value,
          identificationTypeId: this.form.get('tipo_identificacion').value,
          lastName1: this.form.get('apellido').value,
          lastName2: this.form.get('apellido2').value,
          mobile: this.form.get('celular').value,
          name1: this.form.get('nombre').value,
          name2: this.form.get('nombre2').value,
          phoneNumber: this.form.get('telefono').value,
          politicId: this.idPolitic
        };
        if (result) {
          this._register.registerColaborador(form)
            .subscribe(data => {
              this.succesDialog(data.body.message);
            });
        }
      });
  }

  succesDialog(message: string) {
    return this.dialog.open(SuccessDialogComponent, {
      data: {
        message: message,
      }
    }).afterClosed()
      .subscribe(result => {
          this.goBack();
      });
  }

  confirmDialog(title: string, message: string) {
    return this.dialog.open(DialogConfirmComponent, {
      data: {
        title: title,
        content: message
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
