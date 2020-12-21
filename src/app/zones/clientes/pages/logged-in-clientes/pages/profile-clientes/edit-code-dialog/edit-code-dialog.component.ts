import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {RowCodes} from '../../../../../services/logged-in/manage-codes-clientes/manage-users';
import {SelectsService} from '../../../../../../../services/selects/selects.service';
import {Observable} from 'rxjs';
import {RelacionPropiedad} from '../../../../../../../interfaces/relacion-propiedad';
import {tap} from 'rxjs/operators';
import {LoadingService} from '../../../../../../../services/loading/loading.service';
import {ManageCodesClientesService} from '../../../../../services/logged-in/manage-codes-clientes/manage-codes-clientes.service';
import {UserClientesService} from '../../../../../services/user-clientes/user-clientes.service';
import {SuccessDialogComponent} from '../../../../../../../shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-edit-code',
  templateUrl: './edit-code-dialog.component.html',
  styleUrls: ['./edit-code-dialog.component.scss']
})
export class EditCodeDialogComponent implements OnInit {
  form: FormGroup;
  relacion_propiedad$: Observable<RelacionPropiedad[]>;
  relacionId: number;

  constructor(private fb: FormBuilder,
              public _selects: SelectsService,
              private _users: UserClientesService,
              public _loading: LoadingService,
              private dialog: MatDialog,
              private _manageCodes: ManageCodesClientesService,
              @Inject(MAT_DIALOG_DATA) public data: RowCodes,
              public dialogRef: MatDialogRef<EditCodeDialogComponent>) {
    console.log(this.data);
    this.relacion_propiedad$ = this._selects.getTiporelacionPropiedad()
      .pipe(
        tap(relaciones => {
          for (const relacion of relaciones) {
            if  (relacion.description === this.data.relationshipProperty.description) {
              this.relacionId = relacion.relationshipPropertyId;
              this.form.patchValue({ relationshipPropertyId: relacion.relationshipPropertyId });
            }
          }
          this.form.get('relationshipPropertyId').enable();
        })
      );
  }
  ngOnInit() {
    this.form = this.fb.group({
      relationshipPropertyId: [{value: '', disabled: true}, [Validators.required]],
      code: [this.data.code, [Validators.required]],
      address: [this.data.address, [Validators.required]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateSuscription() {
    if (this.form.valid) {
      this._manageCodes.updateCode(this.data.userId, this.data.userSubscriptionId, this.form.value)
        .subscribe(data => {
          this.dialogRef.close(true);
          this.succesDialog(data.body.message);

        });
    }
  }

  succesDialog(message: string) {
    return this.dialog.open(SuccessDialogComponent, {
      data: {
        message: message,
      }
    });
  }
}
