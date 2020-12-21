import {ClasificacionProveedor} from '../clasificacion-proveedor';

export interface RegisterProveedor {
  formId: number;
  generalInformation: {
    nit: number;
    companyName: string;
    legalRepresentativeName1: string;
    legalRepresentativeName2: string;
    legalRepresentativeLastName1: string;
    legalRepresentativeLastName2: string;
    identificationTypeId: number;
    identification: string;
    address: string;
    departmentId: number;
    cityId: number;
    phoneNumber: string;
    mobile: string;
    email: string;
  };
  taxInfo: {
    personTypeId: string;
    taxRegimenId: string;
    regimesTypeIds: Array<number>;
    otherRegimeId: string;
  };
  financialClassification: {
    indebtedness: {
      value: number;
      totalPasive: number
    };
    liquidity: {
      activeCurrent: number;
      pasiveCurrent: number
    }
  };
  providerClassificationIds: Array<number>;
  providerRequiredFiles: ClasificacionProveedor[];
  politicId: number;
}
