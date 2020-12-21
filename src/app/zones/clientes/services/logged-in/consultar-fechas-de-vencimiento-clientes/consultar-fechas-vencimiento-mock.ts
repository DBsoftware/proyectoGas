import {ConsultaFechaVencimiento} from '../../../../../interfaces/consulta-fecha-vencimiento-data';

export class ConsultarFechasVencimientoMock {
  static fechasVencimiento: ConsultaFechaVencimiento = {
      totalElements: 10,
      number: 0,
      size: 10,
      pageable: {
        offset: 0,
        pageNumber: 0,
        pageSize: 10,
        paged: false,
        unpaged: false
      },
      content: [
        {
          codigo: 232332,
          fecha: '16/02/2019'
        },
        {
          codigo: 233223,
          fecha: '23/05/2019'
        },
        {
          codigo: 668676,
          fecha: '23/05/2119'
        },
        {
          codigo: 898989,
          fecha: '16/05/2119'
        },
      ]
    };
}
