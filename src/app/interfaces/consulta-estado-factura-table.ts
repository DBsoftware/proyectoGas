import {Pageable} from './forms/tratamiento-data';

export interface ConsultaEstadoFacturaTable {
  content: RowConsultaEstadoFacturaTable[];
  pageable?: Pageable;
  number: number;
  size: number;
  totalElements: number;
}


export interface RowConsultaEstadoFacturaTable {
  fechaRadicacion: string;
  nombreProveedor: string;
  entidadPagadora: string;
  noFactura: string;
  valor: string;
  banco: string;
  cuentaBancaria: string;
  conceptoFactura: string;
  estado_factura: string;
  fechaPago: string;
}

