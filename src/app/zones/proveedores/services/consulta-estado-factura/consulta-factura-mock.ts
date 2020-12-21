import {ConsultaEstadoFacturaTable} from '../../../../interfaces/consulta-estado-factura-table';
import {ConsultaDeduccionesTable} from '../../../../interfaces/consulta-deducciones-table';

export class ConsultaFacturaMock {
  static  consultaFactura: ConsultaEstadoFacturaTable = {
    number: 0,
    size: 23,
    totalElements: 14,
    content: [
      {
        banco: 'bancolombia',
        conceptoFactura: '1000000',
        cuentaBancaria: '27543434',
        entidadPagadora: 'Americatel',
        estado_factura: 'Hola',
        fechaPago: '23/05/2017',
        fechaRadicacion: '04/05/2101',
        noFactura: '23232332A',
        nombreProveedor: 'Homa mundo',
        valor: '32322323'
      },
      {
        banco: 'bancolombia',
        conceptoFactura: '1000000',
        cuentaBancaria: '27543434',
        entidadPagadora: 'Americatel',
        estado_factura: 'Hola',
        fechaPago: '23/05/2017',
        fechaRadicacion: '04/05/2101',
        noFactura: '23232332A',
        nombreProveedor: 'Homa mundo',
        valor: '32322323'
      },
      {
        banco: 'bancolombia',
        conceptoFactura: '1000000',
        cuentaBancaria: '27543434',
        entidadPagadora: 'Americatel',
        estado_factura: 'Hola',
        fechaPago: '23/05/2017',
        fechaRadicacion: '04/05/2101',
        noFactura: '23232332A',
        nombreProveedor: 'Homa mundo',
        valor: '32322323'
      },
      {
        banco: 'bancolombia',
        conceptoFactura: '1000000',
        cuentaBancaria: '27543434',
        entidadPagadora: 'Americatel',
        estado_factura: 'Hola',
        fechaPago: '23/05/2017',
        fechaRadicacion: '04/05/2101',
        noFactura: '23232332A',
        nombreProveedor: 'Homa mundo',
        valor: '32322323'
      },
      {
        banco: 'bancolombia',
        conceptoFactura: '1000000',
        cuentaBancaria: '27543434',
        entidadPagadora: 'Americatel',
        estado_factura: 'Hola',
        fechaPago: '23/05/2017',
        fechaRadicacion: '04/05/2101',
        noFactura: '23232332A',
        nombreProveedor: 'Homa mundo',
        valor: '32322323'
      },
      {
        banco: 'bancolombia',
        conceptoFactura: '1000000',
        cuentaBancaria: '27543434',
        entidadPagadora: 'Americatel',
        estado_factura: 'Hola',
        fechaPago: '23/05/2017',
        fechaRadicacion: '04/05/2101',
        noFactura: '23232332A',
        nombreProveedor: 'Homa mundo',
        valor: '32322323'
      },
      {
        banco: 'bancolombia',
        conceptoFactura: '1000000',
        cuentaBancaria: '27543434',
        entidadPagadora: 'Americatel',
        estado_factura: 'Hola',
        fechaPago: '23/05/2017',
        fechaRadicacion: '04/05/2101',
        noFactura: '23232332A',
        nombreProveedor: 'Homa mundo',
        valor: '32322323'
      }
    ]
  };
  static  consultaDeducciones: ConsultaDeduccionesTable = {
    number: 0,
    size: 23,
    totalElements: 14,
    content: [
      {
        descripcion: 'Sub total',
        valor_base: '23322323',
        deduccion: '230000',
      },
      {
        descripcion: 'Sub total',
        valor_base: '23322323',
        deduccion: '230000',
      },
      {
        descripcion: 'Sub total',
        valor_base: '23322323',
        deduccion: '230000',
      },
      {
        descripcion: 'Sub total',
        valor_base: '23322323',
        deduccion: '230000',
      },
      {
        descripcion: 'Sub total',
        valor_base: '23322323',
        deduccion: '230000',
      },
      {
        descripcion: 'Sub total',
        valor_base: '233223a23',
        deduccion: '230000',
      },
    ]
  };
}
