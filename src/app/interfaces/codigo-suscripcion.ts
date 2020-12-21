export interface CodigoSuscripcion {
  relationshipProperty: {
    relationshipPropertyId: number;
    description: string;
    date: string;
    status: string;
    companyId: number;
    type: string;
  };
  userSubscriptionId: number;
  code: string;
  address: string;
  sendinvoicemail: boolean;
}
