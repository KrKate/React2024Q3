import { object, string, number, ref, boolean } from "yup";

export const formSchema = object({
  name: string()
    .trim()
    .matches(/^[A-ZА-Я][a-zA-ZА-Яа-яЁё]*(\s[A-ZА-Я][a-zA-ZА-Яа-яЁё]*)*$/, {
      message: "First letter should be uppercase",
    })
    .required(),
  age: number()
    .typeError("Should be a number")
    .integer("Should be an integer")
    .positive("No negative values")
    .required(),
  email: string().email().required(),
  password: string()
    .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z\d]).*$/, {
      excludeEmptyString: true,
      message:
        "Should contain number, uppercased, lowercased, special character",
    })
    .required(),
  confirmPassword: string()
    .required()
    .oneOf([ref("password")], "Password does not match"),
  gender: string().required(),
  accept: boolean().default(false).required().test({
    name: 'checked',
    message: 'Please, accept T&C',
    test(value) {
      return value;
    },
  })
  .transform((value) => Boolean(value)),
});
