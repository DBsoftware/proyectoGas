import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppConfig} from '../../../../../../config/app-config';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {FormValidators} from '../../../../../../class/form-validators';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';
import {RoutingPath} from '../../../../../../routing-path';
import {AccountHelpersService} from '../../../../../../services/account-helpers/account-helpers.service';
import {SetPassword} from '../../../../../../interfaces/forms/set-password';
import {ValidateTokenService} from '../../../../../../services/validate-token/validate-token.service';
import {ClientesConfig} from '../../../../config/clientes-config';

@Component({
  selector: 'app-forget-password-form-clientes',
  templateUrl: './forget-password-form-clientes.component.html',
  styleUrls: ['./forget-password-form-clientes.component.scss']
})
export class ForgetPasswordFormClientesComponent implements OnInit {
  forgetForm: FormGroup;
  logo = AppConfig.APP_LOGO;
  hide = true;
  token: string;
  userId: number;

  constructor(private fb: FormBuilder,
              private router: Router,
              private matDialog: MatDialog,
              private  validateToken: ValidateTokenService,
              private _forgetPassword: AccountHelpersService,
              private ActivateRouter: ActivatedRoute) {
    this.buildForm();
  }

  ngOnInit() {
    this.ActivateRouter.params
      .subscribe(params => {
        this.token = params.token;
        this.userId = Number(params.userId);
      });
  }

  private buildForm(): void {
    this.forgetForm = this.fb.group(
      {
        password: ['',
          [
            Validators.required,
            Validators.pattern(RegularExpressions.PASSWORD_REGEX_PATTERN)
          ]
        ],
        renterPassword: ['',
          [
            Validators.required,
            Validators.pattern(RegularExpressions.PASSWORD_REGEX_PATTERN)
          ]
        ],
        recaptcha: ['', [Validators.required]]
      },
      {validator: FormValidators.checkEquivalent('password', 'renterPassword') }
    );
  }

  submit() {
    if (this.forgetForm.valid) {
      const form: SetPassword = {
        userId: this.userId,
        password: this.forgetForm.get('password').value,
        passwordAux: this.forgetForm.get('renterPassword').value,
        token: this.token
      };
      this._forgetPassword.remenberPasswordRequest(form, ClientesConfig.ZONE_ID)
        .subscribe(data => {
          this.matDialog.open(SuccessDialogComponent,
            {
            data: {
              message: data['message']
            }
          }).afterClosed()
            .subscribe(() => {
              this.router.navigateByUrl('/' + RoutingPath.APP_ROUTING.pages.clientes.path);
            });
        });
    }
  }

}
