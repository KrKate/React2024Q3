export const APP_ROUTES = {
  HOME: "/",
  CONTROLLED: "/controlled_form",
  UNCONTROLLED: "/uncontrolled_form",
};

export type UserInfo = {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  accept: boolean;
  image: string;
  country: string;
};

export interface IForm {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  accept: boolean;
  image: string;
  country: string;
}

export interface IFormValidation {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  accept: boolean;
  image: File;
  country: string;
}
