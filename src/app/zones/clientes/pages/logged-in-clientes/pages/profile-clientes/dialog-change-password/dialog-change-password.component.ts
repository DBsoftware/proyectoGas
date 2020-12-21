import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegularExpressions} from '../../../../../../../class/regular-expressions';
import {FormValidators} from '../../../../../../../class/form-validators';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-change-password',
  templateUrl: './dialog-change-password.component.html',
  styleUrls: ['./dialog-change-password.component.scss']
})
export class DialogChangePasswordComponent implements OnInit {
  activeFormAccount: FormGroup;
  hide = true;
  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<DialogChangePasswordComponent>) { }

  ngOnInit() {
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
            Validators.required,
            Validators.pattern(RegularExpressions.PASSWORD_REGEX_PATTERN)
          ]
        ]
      },
      {validator: FormValidators.checkEquivalent('password', 'renterPassword') }
    );
  }
  submit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
