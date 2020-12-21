export interface VentasConstructoras {
  formId: number;
  identificationType: string;
  identification: number;
  companyName: string;
  name1: string;
  lastName1: string;
  email: string;
  phoneNumber: string;
  mobile: number;
  sendEmailNotification: boolean;
  project: {
    name: string;
    departmentId: number;
    townId: number;
    address: string;
    personInChargeName: string;
    email: string;
    phoneNumber: string;
    socioeconomicLevelId: number;
    residentialUnitsQuantity: number;
    housesQuantity: number;
    apartamentsQuantity: number;
    unitComercialQuantity: number;
    socialZoneQuantity: number;
    init: string;
    end: string;
    requireNetwork: boolean;
    requireInternalExtension: boolean;
    requireAdvisory: boolean;
    connectionCharge: boolean;
    internalInstallation: boolean;
    pointsQuantity: number;
  };
  fileIds:  Array<number>;
  politicId: number;
  recaptchaToken: string;
}
