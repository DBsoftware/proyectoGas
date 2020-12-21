export interface CertificadoDisponibilidad {
  formId: number;
  identificationType: string;
  identification: string;
  companyName: string;
  name1: string;
  lastName1: string;
  email: string;
  phoneNumber: string;
  sendEmailNotification: boolean;
  project: {
    name: string;
    townId: number;
    address: string;
    personInChargeName: string;
    socioeconomicLevelId: number;
    cadastralNumber: number;
    numberOfRealEstateRegistration: number;
    residentialUnitsQuantity: number;
    housesQuantity: number;
    apartamentsQuantity: number;
    unitComercialQuantity: number;
    socialZoneQuantity: number;
    init: string;
    end: string;
  };
  fileIds: Array<number>;
  politicId: number;
  recaptchaToken: string;
}
