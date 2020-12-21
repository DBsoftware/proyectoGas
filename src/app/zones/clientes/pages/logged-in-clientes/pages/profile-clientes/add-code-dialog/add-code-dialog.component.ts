import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';
import {RelacionPropiedad} from '../../../../../../../interfaces/relacion-propiedad';
import {tap} from 'rxjs/operators';
import {LoadingService} from '../../../../../../../services/loading/loading.service';
import {SelectsService} from '../../../../../../../services/selects/selects.service';
import {ManageCodesClientesService} from '../../../../../services/logged-in/manage-codes-clientes/manage-codes-clientes.service';
import {SuccessDialogComponent} from '../../../../../../../shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-add-code',
  templateUrl: './add-code-dialog.component.html',
  styleUrls: ['./add-code-dialog.component.scss']
})
export class AddCodeDialogComponent implements OnInit {
  form: FormGroup;
  relacion_propiedad$: Observable<RelacionPropiedad[]>;
  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public _loading: LoadingService,
              private dialog: MatDialog,
              public _selects: SelectsService,
              private _manage: ManageCodesClientesService,
              public dialogRef: MatDialogRef<AddCodeDialogComponent>) {
    this.relacion_propiedad$ = this._selects.getTiporelacionPropiedad();
  }
  ngOnInit() {
    this.form = this.fb.group({
      relationshipPropertyId: ['', [Validators.required]],
      code: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createCode() {
   if (this.form.valid) {
     return this._manage.createCode(this.data.userId, this.form.value)
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
