import {TipoIdentificacionSelect} from '../../interfaces/tipo-identificacion-select';
import {CodigoSuscripcion} from '../../interfaces/codigo-suscripcion';
import {TipoFuga} from '../../interfaces/forms/tipo-fuga';
import {CodigoCliente} from '../../interfaces/forms/codigo-cliente';

export class SelectsMock {
    public static tipo_documento: TipoIdentificacionSelect[] = [
      {
        id: 1,
        description: 'Cédula',
        date: '2018-09-22T20:56:22.557+0000',
        status: 'A',
        companyId: 322
      },
    ];
 /*   static codigoSuscriptcion: CodigoSuscripcion[] = [
      {
        nombre: 'Contratista',
        valor: 'C'
      },
      {
        nombre: 'Tercero',
        valor: 'T'
      }
    ];*/
/*    static  tipoFuga: TipoFuga[] = [
      {
      description: 'Residencial',
      value: 'R'
    },
      {
        description: 'Pública',
        value: 'P'
      },
    ];*/
    static codigoCliente: CodigoCliente[] = [
      {
        value: 2232323,
        description: '232323'
      },
      {
        value: 6676767,
        description: '6676767'
      },
      {
        value: 8921981,
        description: '8921981'
      },
    ];
}
