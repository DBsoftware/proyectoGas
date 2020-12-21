import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../../../../../../config/app-config';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserClientesService} from '../../../../services/user-clientes/user-clientes.service';
import {MatDialog} from '@angular/material';
import {DialogChangePasswordComponent} from './dialog-change-password/dialog-change-password.component';
import {LoadingService} from '../../../../../../services/loading/loading.service';

@Component({
  selector: 'app-profile-clientes',
  templateUrl: './profile-clientes.component.html',
  styleUrls: ['./profile-clientes.component.scss']
})
export class ProfileClientesComponent implements OnInit {
  logo = AppConfig.APP_LOGO;
  hide = true;
  formProfile: FormGroup;
  userId: number;
  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              public _loading: LoadingService,
              public _user: UserClientesService) {
    this.buildForm();
  }
  ngOnInit() {
    this._user.getUserData()
      .subscribe(user => {
        console.log(user);
        if (user) {
          this.userId = user.userId;
          this.formProfile.setValue(
            {
              nombre: user.name1,
              nombre2: user.name2,
              apellido: user.lastName1,
              apellido2: user.lastName2,
              email: user.email,
              identificacion: user.identification
            },
          );
        }
      });
  }

  private buildForm(): void {
    this.formProfile = this.fb.group({
      nombre: ['', [Validators.required]],
      nombre2: ['', []],
      apellido: ['', [Validators.required]],
      apellido2: ['', []],
      identificacion: [{value: '', disabled: true}, [Validators.required]],
      email: [{value: '', disabled: true}, [Validators.required]],
    });
  }

  submit() {
      this.formProfile.get('nombre').value;
  }

  openChangePassword() {
    this.dialog.open(DialogChangePasswordComponent,
      {
        minWidth: '70vw',
        minHeight: '58vh',
      });
  }
}
