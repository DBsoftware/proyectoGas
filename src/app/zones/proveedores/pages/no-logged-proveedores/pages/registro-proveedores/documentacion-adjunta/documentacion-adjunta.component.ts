import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FileIcon} from '../../../../../../../interfaces/file-icon';
import {MatDialog} from '@angular/material';
import {Observable} from 'rxjs';
import {RegisterProveedoresService} from '../../../../../services/register-proveedores/register-proveedores.service';
import {AppConfig} from '../../../../../../../config/app-config';
import {ClasificacionProveedor} from '../../../../../../../interfaces/clasificacion-proveedor';
import {FileInstructivoProveedores, InstructivoRegisterProveedores} from '../../../../../../../interfaces/instructivo-register-proveedores';
import {PdfViewerComponent} from '../../../../../../../shared/pdf-viewer/pdf-viewer.component';
import {ClientesConfig} from '../../../../../../clientes/config/clientes-config';

@Component({
  selector: 'app-documentacion-adjunta',
  templateUrl: './documentacion-adjunta.component.html',
  styleUrls: ['./documentacion-adjunta.component.scss']
})
export class DocumentacionAdjuntaComponent implements OnInit {
  @Input() form: FormGroup;
  urlToUpload = `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/asresource`;
  listarInputsFiles$: Observable<any>;
  listInstruccions$: Observable<InstructivoRegisterProveedores[]>;
  clasificacionArray: ClasificacionProveedor[] = [];
  @Output() fielIdAndFiles: EventEmitter<ClasificacionProveedor[]> = new  EventEmitter<ClasificacionProveedor[]>();
  @Output() idPolitic: EventEmitter<number> = new EventEmitter<number>();
  @Output() recaptcha: EventEmitter<string> = new EventEmitter<string>();
  listArr = [
    {
      icon: 'picture_as_pdf',
      text: '1. Instructivo',
      link: '#'
    },
    {
      icon: 'picture_as_pdf',
      text: '2. Solicitud de inscripción',
      link: '#'
    },
    {
      icon: 'picture_as_pdf',
      text: '3. Solicitud de inscripción',
      link: '#'
    },
    {
      icon: 'picture_as_pdf',
      text: '4. Certificado de experiencia',
      link: '#'
    },
    {
      icon: 'picture_as_pdf',
      text: '5. Origen de fondos',
      link: '#'
    }
  ];

  metadataFiles: FileIcon[] = [
    {
      iconName: 'doc_icon',
      extension: '.docx',
      url: 'assets/doc-icon.svg'
    },
    {
      iconName: 'pdf_icon',
      extension: '.pdf',
      url: 'assets/pdf-icon.svg'
    }
    ];
  constructor(private dialog: MatDialog,
              private _register: RegisterProveedoresService) { }

  ngOnInit() {
    this.listarInputsFiles$ = this._register.listarInputsFiles();
    this.listInstruccions$ = this._register.getInstructions();
  }

  recivedIdfiles(idFile: number[], idInput: number) {
    if (idFile[0]) {
      this.clasificacionArray.push(
        {
          fileId: idFile[0],
          providerRequiredFileId: idInput
        }
      );
    } else {
      for (let i = 0; i < this.clasificacionArray.length; i++) {
        if (this.clasificacionArray[i].providerRequiredFileId === idInput) {
          this.clasificacionArray.splice(i, 1);
        }
      }
    }
    this.fielIdAndFiles.emit(this.clasificacionArray);
  }

  reciveIdPolitic(id) {
    this.idPolitic.emit(id);
  }
  recaptchaF(token) {
    if (token) {
      this.recaptcha.emit(token);
    } else {
      this.recaptcha.emit(null);
    }
  }

  viewPDF(item: FileInstructivoProveedores) {
    console.log(item);

    this.dialog.open(PdfViewerComponent, {
      minWidth: '90vw',
      minHeight: '68vh',
      data: {
        url: `${ AppConfig.API_DOMAIN }:${ AppConfig.PORT }${ AppConfig.API_PREFIX }${ AppConfig.GLOBAL_PREFIX }company/${ AppConfig.COMPANY_ID }/file/${ item.id }/stream`
      }
    });
  }


}
