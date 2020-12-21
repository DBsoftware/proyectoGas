import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppConfig} from '../../../../../../config/app-config';
import {AccountHelpersService} from '../../../../../../services/account-helpers/account-helpers.service';
import {MatDialog} from '@angular/material';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {Location} from '@angular/common';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';
import {ClientesConfig} from '../../../../../clientes/config/clientes-config';
import {ProveedoresConfig} from '../../../../config/proveedores-config';

@Component({
  selector: 'app-forget-password-proveedores',
  templateUrl: './forget-password-proveedores.component.html',
  styleUrls: ['./forget-password-proveedores.component.scss']
})
export class ForgetPasswordProveedoresComponent implements OnInit {
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
      this._forgetPassword.requestPassword(this.forgetPasswordClientes.get('forgetPasswordClientes').value, ProveedoresConfig.ZONE_ID)
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
