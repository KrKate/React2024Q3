import { object, string, number } from "yup";

export const formSchema = object({
  name: string()
    .trim()
    .matches(/^[A-ZА-Я][a-zA-ZА-Яа-яЁё]*$/, {
      message: "First letter should be uppercase",
    })
    .required(),
  age: number()
    .typeError("Should be a number")
    .integer("Should be an integer")
    .positive("No negative values")
    .required(),
  email: string().email().required(),
});
