export interface NetworkExpansion {
  formId: number;
  identificationType: string;
  identification: number;
  name1: string;
  name2: string;
  lastName1: string;
  lastName2: string;
  email: string;
  mobile: number;
  phoneNumber: number;
  sendEmailNotification: boolean;
  pieceOfGround: {
    address: string;
    departamentId: number;
    townId: number
  };
  fileIds: Array<number>;
  politicId:  number;
  recaptchaToken: string;
}
