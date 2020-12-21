import {EnvioFacturaCorreo} from '../../../../../interfaces/envio-factura-correo';

export class EnvioFacturaMock {
  static dataFactura: EnvioFacturaCorreo =  {
    totalElements: 20,
    size: 10,
    number: 10,
    content: [
        {
          id: 1,
          codigo: '233223',
          edicion: true,
        },
        {
          id: 1,
          codigo: '233223',
          edicion: false,
        },
        {
          id: 1,
          codigo: '233223',
          edicion: true,
        }
      ]
  };
}
