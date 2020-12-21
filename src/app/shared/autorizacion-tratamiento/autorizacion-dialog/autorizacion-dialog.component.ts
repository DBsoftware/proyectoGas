import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {DownloadService} from '../../../services/download/download.service';
import {DomSanitizer} from '@angular/platform-browser';
import {last, tap} from 'rxjs/operators';
import {HttpEvent, HttpEventType} from '@angular/common/http';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-autorizacion-dialog',
  templateUrl: './autorizacion-dialog.component.html',
  styleUrls: ['./autorizacion-dialog.component.scss']
})
export class AutorizacionDialogComponent implements OnInit, OnDestroy {
  rawFile: any;
  dataLocalUrl: any;
  linkSource: string;
  loadingFile: boolean;
  downloadProgress = 0;
  cancelDownload;
  constructor(
    public dialogRef: MatDialogRef<AutorizacionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private downloadService: DownloadService,
    private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.loadingFile = true;
    this.cancelDownload = this.downloadService.viewFileNoLogged(this.data.url, this.data.code)
      .pipe(
        tap(event => this.showProgress(this.getEventMessage(event))),
        last()
      )
      .subscribe(response => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          const url = window.URL.createObjectURL(new Blob([this.rawFile], {type: 'application/pdf'}));
          this.dataLocalUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
          this.loadingFile = false;
        }, false);

        if (response !== undefined) {
          this.rawFile = response;
          reader.readAsDataURL(response);
        }
      });
  }

  ngOnDestroy() {
    this.linkSource = undefined;
    this.cancelDownload.unsubscribe();
  }

  private showProgress(message: any) {
    this.getEventMessage(message);
  }

  getPDF() {
    return this.dataLocalUrl;
  }

  private getEventMessage(event: HttpEvent<any>) {
    if (event) {
      switch (event.type) {
        case HttpEventType.Sent:
          return 'Solicitando archivo';
        case HttpEventType.ResponseHeader:
          return 'Solicitud recibida';
        case HttpEventType.DownloadProgress:
          const percentDone = Math.round(100 * event.loaded / event.total);
          this.downloadProgress = percentDone;
          break;
        case HttpEventType.Response:
      }
    }
  }

  continuar() {
    const control = <AbstractControl>this.data.control;
    control.markAsTouched();
    if (control.valid) {
      this.dialogRef.close();
    }
  }

}
