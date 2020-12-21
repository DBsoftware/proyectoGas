import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppConfig} from '../../../../../../config/app-config';
import {AccountHelpersService} from '../../../../../../services/account-helpers/account-helpers.service';
import {MatDialog} from '@angular/material';
import {LoadingService} from '../../../../../../services/loading/loading.service';
import {Location} from '@angular/common';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';
import {ConfigColaboradores} from '../../../../config/config-colaboradores';

@Component({
  selector: 'app-reset-password-colaboradores',
  templateUrl: './reset-password-colaboradores.component.html',
  styleUrls: ['./reset-password-colaboradores.component.scss']
})
export class ResetPasswordColaboradoresComponent implements OnInit {

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
      this._forgetPassword.requestPassword(this.forgetPasswordClientes.get('forgetPasswordClientes').value, ConfigColaboradores.ZONE_ID)
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
