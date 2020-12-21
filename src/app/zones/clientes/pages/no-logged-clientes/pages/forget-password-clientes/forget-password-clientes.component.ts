import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppConfig} from '../../../../../../config/app-config';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {AccountHelpersService} from '../../../../../../services/account-helpers/account-helpers.service';
import {MatDialog} from '@angular/material';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';
import {Location} from '@angular/common';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {ProveedoresConfig} from '../../../../../proveedores/config/proveedores-config';
import {ClientesConfig} from '../../../../config/clientes-config';

@Component({
  selector: 'app-forget-password-clientes',
  templateUrl: './forget-password-clientes.component.html',
  styleUrls: ['./forget-password-clientes.component.scss']
})
export class ForgetPasswordClientesComponent implements OnInit {
  forgetPasswordClientes: FormGroup;
  logo = AppConfig.APP_LOGO;
  constructor(private fb: FormBuilder,
              private _forgetPassword: AccountHelpersService,
              private dialog: MatDialog,
              public _Loading: LoadingService,
              private location: Location) { }

  ngOnInit() {
    this.buildForm();
  }
  private buildForm() {
    this.forgetPasswordClientes = this.fb.group(
      {
         forgetPasswordClientes: ['', [Validators.required, Validators.pattern(RegularExpressions.EMAIL_REGEX)]],
         recaptcha: ['', [Validators.required]]
      }
    );
  }

  submit() {
    if (this.forgetPasswordClientes.valid) {
      this._forgetPassword.requestPassword(this.forgetPasswordClientes.get('forgetPasswordClientes').value, ClientesConfig.ZONE_ID)
        .subscribe(data => {
            this.dialog.open(SuccessDialogComponent, {
              data: {
               message: data['message']
              }
            });
        });
    }

  }

  goBack() {
    this.location.back();
  }

}
