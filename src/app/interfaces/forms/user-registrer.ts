export interface UserRegistrer {
  identification: string;
  email: string;
  phoneNumber: string;
  identificationTypeId: number;
  name1: string;
  name2: string;
  lastName1: string;
  lastName2: string;
  userSubscriptions: UserSuscription[];
  politicId: number;
  captchaToken: string;
}

export interface UserSuscription {
  relationshipPropertyId: number;
  code: string;
  address: string;
}
