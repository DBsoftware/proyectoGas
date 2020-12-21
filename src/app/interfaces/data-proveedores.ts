export interface DataProveedores {
  generalInformation: {
    nit: string;
    companyName: string;
    legalRepresentativeName1: string;
    legalRepresentativeName2: string;
    legalRepresentativeLastName1: string;
    legalRepresentativeLastName2: string;
    identificationType: string;
    identification: number;
    address: string;
    department: string;
    city: string;
    phoneNumber: string;
    mobile: string;
    email: string;
  };
    taxInfo: {
      personType: string;
      taxRegimen: string;
      regimesTypes: RegimesTypes[];
      otherRegimeId: string;
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
    providerClassification: [
      {
        description: string;

      }
      ];
    providerRequiredFiles: ProviderRequiredFiles[];
  }

export interface RegimesTypes {
  description: string;
}

export interface ProviderRequiredFiles {
  description: string;
  idFile: number;
}
