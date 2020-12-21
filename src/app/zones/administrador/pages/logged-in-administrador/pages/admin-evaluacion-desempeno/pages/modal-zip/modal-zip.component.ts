import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {DownloadService} from '../../../../../../../../services/download/download.service';
import {last} from 'rxjs/operators';
import {DialogConfirmComponent} from '../../../../../../../../shared/dialog-confim/dialog-confirm.component';

@Component({
  selector: 'app-modal-zip',
  templateUrl: './modal-zip.component.html',
  styleUrls: ['./modal-zip.component.scss']
})
export class ModalZipComponent implements OnInit {
  fileControl: AbstractControl;
  urlToUpload  = ``;
  rawFile: any;
  idFiles: number[];
  constructor(public dialogRef: MatDialogRef<ModalZipComponent>,
              private  _download: DownloadService,
              private dialog: MatDialog,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.fileControl = this.fb.control('', [Validators.required]);
  }

  downloadPlanilla() {
    this.dialog.open(DialogConfirmComponent,
      {
        data: {
          title: 'Confirmar transacción',
          content: '¿Confirma la creación de la petición para descargar el archivo?'
        }
      }).afterClosed()
      .subscribe(result => {
        if (result) {
          this._download.downloadPlanilla()
            .pipe(
              last()
            )
            .subscribe(data => {
              const reader = new FileReader();
              reader.addEventListener('load', () => {
                this._download.doDownloadManual(this.rawFile, 'planilla.xlsx');
              }, false);
              if (data.body !== undefined) {
                this.rawFile = data.body;
                reader.readAsDataURL(data.body.data);
              }
            });
        }
      });
  }
    reciveIdFiles(event) {
      this.idFiles = event[0];
    }

  cerrar() {
    this.dialogRef.close();
  }
  }
