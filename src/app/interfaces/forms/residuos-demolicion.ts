import {DisposicionFinalResiduos} from './disposicion-final-residuos';

export interface ResiduosDemolicion {
  formId: number;
  typeNatureId: number;
  identification: number;
  name1: string;
  name2: string;
  lastName1: string;
  lastName2: string;
  email: string;
  phoneNumber: string;
  mobile: number;
  sendEmailNotification: boolean;
  aditionalInfo: string;
  politicId: number;
  filesId: Array<number>;
  recaptchaToken: string;
}
