export interface FirmasInstaladorasProv {
  formId: number;
  identificationTypeId: number;
  taxIdentification: number;
  companyName: string;
  startDate: string;
  economicActivityId: number;
  sicCode: string;
  contactInformation: {
    mainAddress: string;
    correspondenceAddress: string;
    email: string;
    phoneNumber: string;
    faxNumber: string;
    departmentId: number;
    cityId: number;
  };
  legalRepresentativeInformation: {
    name1: string;
    name2: string;
    lastName1: string;
    lastName2: string;
    identificationTypeId: number;
    identification: number;
    address: string;
    neigthborhood: string;
    phoneNumber: string;
    faxNumber: string;
    departamentId: number;
    cityId: number
  };
  helpersInformation: HelpInformacion[];
  politicId: number;
  autorizationId: number;
  recaptchaToken: string;
}

export interface HelpInformacion {
  jobTitle: string;
  names: string;
  identification: string;
  laborCertification: string;
  fileId: number;
}
