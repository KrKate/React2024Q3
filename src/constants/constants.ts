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
};

export interface IControlled {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  accept: boolean;
  image: string;
}

export interface IControlledValidate {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  accept: boolean;
  image: File;
}
