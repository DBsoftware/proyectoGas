import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../../../../../../config/app-config';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ActiveAccountClientesService} from '../../../../../clientes/services/no-logged/active-account/active-account-clientes.service';
import {RegularExpressions} from '../../../../../../class/regular-expressions';
import {FormValidators} from '../../../../../../class/form-validators';
import {ActiveAccount} from '../../../../../../interfaces/forms/active-account';
import {SuccessDialogComponent} from '../../../../../../shared/success-dialog/success-dialog.component';
import {RoutingPath} from '../../../../../../routing-path';
import {ConfigColaboradores} from '../../../../config/config-colaboradores';

@Component({
  selector: 'app-active-account-colaboradores',
  templateUrl: './active-account-colaboradores.component.html',
  styleUrls: ['./active-account-colaboradores.component.scss']
})
export class ActiveAccountColaboradoresComponent implements OnInit {
  logo = AppConfig.APP_LOGO;
  hide = true;
  activeFormAccount: FormGroup;
  token: string;
  userId: number;
  constructor(private fb: FormBuilder,
              private router: Router,
              private matDialog: MatDialog,
              private ActivateRouter: ActivatedRoute,
              private _activeAccount: ActiveAccountClientesService ) {
    this.buildForm();
  }

  ngOnInit() {
    this.ActivateRouter.params
      .subscribe(params => {
        this.token = params.token;
        this.userId = params.userId;
      });
  }

  private buildForm(): void {
    this.activeFormAccount = this.fb.group(
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
    if (this.activeFormAccount.valid) {
      const form: ActiveAccount = {
        password: this.activeFormAccount.get('password').value,
        auxPassword: this.activeFormAccount.get('renterPassword').value,
        token: this.token
      };
      this._activeAccount.activeAccount(form, this.userId, ConfigColaboradores.ZONE_ID)
        .subscribe(data => {
          this.matDialog.open(SuccessDialogComponent,
            {
              data: {
                message: data['message']
              }
            }).afterClosed()
            .subscribe(() => {
              this.router.navigateByUrl('/' + RoutingPath.APP_ROUTING.pages.colaboradores.path);
            });
        });
    }
  }

}
