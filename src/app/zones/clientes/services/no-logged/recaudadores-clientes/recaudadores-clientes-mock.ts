import {RecaudadoresData} from '../../../../../interfaces/recaudadores-data';
import {AutoCompleteData} from '../../../../../interfaces/auto-complete-data';

export class RecaudadoresClientesMock {
/*  static recaudadoresData: RecaudadoresData = {
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
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
        entidad: 'Recaudador 1',
        municipio: 'Granada',
        direccion: 'Av Siempre Viva',
        horarios: 'Lunes a viernes 8:00 AM a 6:00 PM',
        telefono: '23322323',
        isOpen: true,
        lat: 3.5448732,
        long: -73.7229126
      },
      {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
        entidad: 'Recaudador 2',
        municipio: 'Fuente de Oro',
        direccion: 'Av Calle 22',
        horarios: 'Lunes a viernes 8:00 AM a 6:00 PM',
        telefono: '23322323',
        isOpen: true,
        lat: 3.4625127,
        long: -73.6243568
      },
      {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
        entidad: 'Recaudador 3',
        municipio: 'Acacias',
        direccion: 'Av Calle 22',
        horarios: 'Lunes a viernes 8:00 AM a 6:00 PM',
        telefono: '23322323',
        isOpen: true,
        lat: 3.9889469,
        long: -73.7620333
      },
      {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
        entidad: 'Recaudador 3',
        municipio: 'San Martín',
        direccion: 'Av Calle 21',
        horarios: 'Lunes a viernes 8:00 AM a 6:00 PM',
        telefono: '23322323',
        isOpen: true,
        lat: 3.6985732,
        long: -73.6989195
      },
      {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
        entidad: 'Recaudador 4',
        municipio: 'Villavicencio',
        telefono: '23322323',
        direccion: 'Av Calle 21',
        isOpen: true,
        horarios: 'Lunes a viernes 8:00 AM a 6:00 PM',
        lat: 4.137589,
        long: -73.6294337
      },
      {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
        entidad: 'Recaudador 5',
        municipio: 'Cumaral',
        telefono: '23322323',
        horarios: 'Lunes a viernes 8:00 AM a 6:00 PM',
        direccion: 'Av Calle 21',
        isOpen: true,
        lat: 4.2703425,
        long: -73.4877749
      },
    ]
  };*/
  static  categoriaAutoComplete: AutoCompleteData[] = [
    {
      id: 1,
      description: 'Gas empresa'
    },
    {
      id: 2,
      description: 'Gas personas'
    },
    {
      id: 3,
      description: 'Gas grandes empresas'
    }
  ];

  static municipiosAutocomplete: AutoCompleteData[] = [
    {
      id: 1,
      description: 'Granada, Meta'
    },
    {
      id: 2,
      description: 'Cumaral, Meta'
    },
    {
      id: 3,
      description: 'San Martín, Meta'
    }
  ];
  static entidad: AutoCompleteData[] = [
    {
      id: 1,
      description: 'Entidad de recaudo 1'
    },
    {
      id: 2,
      description: 'Entidad de recaudo 2'
    },
    {
      id: 3,
      description: 'Entidad de recaudo 3'
    },
  ];
}
