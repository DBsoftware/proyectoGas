import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractControl} from '@angular/forms';
import {PdfViewerComponent} from '../pdf-viewer/pdf-viewer.component';
import {AppConfig} from '../../config/app-config';
import {MatDialog} from '@angular/material';
import {CurrentPoliticService} from '../../services/current-politic/current-politic.service';
import {ConfigAdmin} from '../../zones/administrador/config/config-admin';
import {LoadingService} from '../../services/loading/loading.service';
import {Observable} from 'rxjs';
import {AutorizacionDialogComponent} from './autorizacion-dialog/autorizacion-dialog.component';

@Component({
  selector: 'app-autorizacion-tratamiento',
  templateUrl: './autorizacion-tratamiento.component.html',
  styleUrls: ['./autorizacion-tratamiento.component.scss']
})
export class AutorizacionTratamientoComponent implements OnInit {
   @Input() control: AbstractControl;
  idPolitic: number;
  idFilePolitic: number;
  idTratamiento: number;
  idFileTratamiento: number;
  loading: boolean;
  @Output() sendIdTratamiento = new EventEmitter<number>();
  @Output() sendIdPolitic = new EventEmitter<number>();
  constructor(private dialog: MatDialog,
              public  _loadingService: LoadingService,
              private _currentPolitic: CurrentPoliticService) {
  }

  ngOnInit() {
    this.loading = true;
    const url = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/politic/current`;
     this._currentPolitic.getCurrentPolitic(url)
      .subscribe(data => {
        this.idPolitic = data.id;
        this.idFilePolitic = data.fileId;
        this.sendIdPolitic.emit(this.idPolitic);

        const url_tratamiento = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }/${ ConfigAdmin.ZONE_PREFIX }/company/${ AppConfig.COMPANY_ID }/authorization/current`;
          this._currentPolitic.getCurrentPolitic(url_tratamiento)
          .subscribe(tratamiento => {
            this.loading = false;
            this.idTratamiento = tratamiento.id;
            this.idFileTratamiento = tratamiento.fileId;
            this.sendIdTratamiento.emit(this.idTratamiento);
          }, err => {
            this.loading = false;
            console.log(err);
            this.control.disable();
          });
      }, err => {
        console.log(err);
        this.loading = false;
        this.control.disable();
      });


  }

  openFirstPDF() {
    this.dialog.open(PdfViewerComponent,
      {
        minHeight: '65vh',
        minWidth: '90vw',
        data: {
          url: `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/${ this.idFilePolitic }/stream`
        }
      });
  }

  openSecondPDF() {
    this.dialog.open(AutorizacionDialogComponent,
      {
        minHeight: '65vh',
        minWidth: '90vw',
        data: {
          url: `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/${ this.idFileTratamiento }/stream`,
          control: this.control
        }
      });
  }


}
