import {UserSuscription} from '../../../../../interfaces/forms/user-registrer';

export interface Codes {
  content: RowCodes[];
  totalElements: number;
  number: number;
  size: number;
}
export interface RowCodes {
  address: string;
  code: string;
  relationshipProperty: {
    description: string;
  };
  userSubscriptionId: number;
  userId: number;
}
 /** export class ManageUsers {
  static codes: Codes = {
    content: [{
      address: 'Av siempre viva',
      userSubscrptionCode: '3233223',
      relationshipProperty: 'Dueño'
    },
      {
        address: 'Av siempre muerta',
        userSubscrptionCode: '2336223',
        relationshipProperty: 'Arrendatario'
      },
      {
        address: 'Av Adrián',
        userSubscrptionCode: '2332243',
        relationshipProperty: 'Dueño'
      },
      {
        address: 'Av Nicolas',
        userSubscrptionCode: '2332343',
        relationshipProperty: 'Dueño'
      },
      {
        address: 'Av Americas',
        userSubscrptionCode: '2333223',
        relationshipProperty: 'Dueño'
      }],
      totalElements: 5,
      number: 0,
      size: 5,
  };

}

  **/
