export interface RegistroProveedores {
  generalInformation: {
    nit: string;
    companyName: string;
    legalRepresentativeName1: string;
    legalRepresentativeName2: string;
    legalRepresentativeLastName1: string;
    legalRepresentativeLastName2: string;
    identificationType: string;
    identification: string;
    address: string;
    departmentId: number;
    cityId: number;
    phoneNumber: number;
    mobile: string;
    email: string;
  };
  taxInfo: {
    personType: string;
    taxRegimen: string;
    regimes: {
      taxpayer: boolean;
      bigTaxpayer: boolean;
      selfRetainer: boolean;
      other: boolean;
      otherDescription: string;
    }

  };
  financialClassification: {
    indebtedness: {
      value: number;
      totalPasive: number;
    };
    liquidity: {
      activeCurrent: number;
      pasiveCurrent: number;
    }
  };
  providerClassification: {
    'Suministros de bienes generales': Array<string>;
    'Prestación de servicios generales': Array<string>;
  };
  providerRequiredFile: {
    registrationRequest: number;
    experienceCertificate: number;
    dataSourceCertificate: number;
    naturalPersonCertificate: number;
    rut: number;
    chamberOfCommerce: number;
    experienceCertificate1: number;
    experienceCertificate2: number;
    experienceCertificate3: number;
    bankCertification: number;
    financialStatements: number;
  };
}
