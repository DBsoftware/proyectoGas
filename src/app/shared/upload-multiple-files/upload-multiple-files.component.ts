import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {from, throwError} from 'rxjs';
import {catchError, concatMap, last, tap} from 'rxjs/operators';
import {SuccessDialogComponent} from '../success-dialog/success-dialog.component';
import {UploadFileService} from '../../services/upload/upload-file.service';
import {MatDialog, MatIconRegistry} from '@angular/material';
import {AbstractControl} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {FileIcon} from '../../interfaces/file-icon';
import {UploadedFile} from '../../interfaces/uploaded-file';
import {hasRequiredField} from '../../class/form-validators';

@Component({
  selector: 'app-upload-multiple-files',
  templateUrl: './upload-multiple-files.component.html',
  styleUrls: ['./upload-multiple-files.component.scss'],
})
export class UploadMultipleFilesComponent implements OnChanges, OnInit {
  @ViewChild('inputFile') filesList: HTMLInputElement;
  @Input() url: string;
  @Input() formControlFile: AbstractControl;
  @Input() multiple: boolean;
  @Input() accept: string;
  notUploadFile: Array<File> = [];
  filesUploaded: UploadedFile[] = [];
  removeX = false;
  @Input() percentWidth: number;
  @Input() arrIcons: FileIcon[] | null;
  isRequired: boolean;
  @Output() sentIdFiles: EventEmitter<number[]> = new EventEmitter<number[]>();
  uploading = false;
  filesId: number[] = [];
  constructor(private uploader: UploadFileService,
              private domSani: DomSanitizer,
              private _icon: MatIconRegistry,
              private dialog: MatDialog) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.formControlFile.pristine) {
        this.formControlFile.valueChanges
          .subscribe(data => {
           if (data === null) {
             this.filesUploaded = [];
             this.sentIdFiles.emit([]);
           }
          });
    }
  }
  ngOnInit() {
    this.isRequired = hasRequiredField(this.formControlFile);

    if (this.arrIcons !== null) {
      for (const icon of this.arrIcons) {
        this._icon.addSvgIcon(icon.iconName, this.domSani.bypassSecurityTrustResourceUrl(icon.url));
      }
    }
  }


  /**
   * Sube los archivos uno por uno
   * @param files
   */
  validFileAndUpload(files: Array<File>) {
    this.uploading = true;
    if (files.length <= 20) {
      from(files) // from imprimiría los elementos de este array uno por uno
        .pipe(
          concatMap((file) => {
            return this.uploader.uploadFile(file, this.url);
          }),
          catchError(err => {
            this.uploading = false;
            console.log(err);
            return throwError(err);
          }),
          tap(data => {
            this.filesUploaded.push(data.data);
            // this.filesId.push(data.data);
          }),
          last()
        ).subscribe(response => {
          this.notUploadFile = [];
          this.formControlFile.setValue('');
          this.formControlFile.markAsPristine();
          this.formControlFile.setErrors(null);
          this.uploading = false;
          this.sentIdFiles.emit(this.walkInFilesId(this.filesUploaded));
          this.successDialog(response.message);
      });
    }
  }

  removeNotUploadedFile(index: number) {
    this.notUploadFile.length <= 1 ? this.removeX = true :  this.removeX = false;
    if (this.notUploadFile.length > 1 && this.notUploadFile.length < 20)  {
      this.notUploadFile.splice(index, 1);
      return;
    }
    if (this.notUploadFile.length === 1 && this.filesUploaded.length === 0) {
      this.notUploadFile = [];
      this.formControlFile.setValue('');
      this.formControlFile.markAsTouched();
    }
  }

  removeUploadedFile(index: number) {
    this.filesUploaded.splice(index, 1);
    if (this.notUploadFile.length === 0 && this.filesUploaded.length === 0) {
      this.formControlFile.setValue('');
      this.formControlFile.markAsTouched();
      this.sentIdFiles.emit([]);
      return;
    }
    this.sentIdFiles.emit(this.walkInFilesId(this.filesUploaded));
  }

  successDialog(message: string) {
    return this.dialog.open(SuccessDialogComponent, {
      data: {
        message: message,
      }
    });
  }

  filesChange(event) {
    this.notUploadFile = [];
    const files = <FileList>event.target.files;
    for (let i = 0; i < files.length; i++) {
        this.notUploadFile.push(files.item(i));
    }
    this.removeX = false;
  }

  checkIcon(filename: string) {
    for (const icon of this.arrIcons) {
      if (filename.includes(icon.extension)) {
        return icon.iconName;
      }
    }
  }

  /**
   * retorna el id de los archivos
   * @param files
   */
  walkInFilesId(files: UploadedFile[]) {
    const refFiles: Array<number> = [];
    for (const file of files) {
      refFiles.push(file.fileId);
    }
    return refFiles;
  }
}
