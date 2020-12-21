export interface ResiduosEspeciales {
  formId: number;
  typeNatureId: number;
  identification: number;
  name1: string;
  name2: string;
  lastName1: string;
  lastName2: string;
  email: string;
  phoneNumber: string;
  mobile: string;
  sendEmailNotification: boolean;
  serviceItems: DatatableResiduosEspeciales[];
  politicId: number;
  recaptchaToken: string;
}

export interface DatatableResiduosEspeciales {
  serviceSpecialAndNonCompactableWasteId: number;
  unitValue: number;
  quantity: number;
}
