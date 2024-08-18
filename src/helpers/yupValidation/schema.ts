import { object, string, number, ref, boolean, mixed } from "yup";

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
    message: 'Please, accept Terms and Conditions',
    test(value) {
      return value;
    },
  })
  .transform((value) => Boolean(value)),
  image: mixed((value): value is File => value instanceof File)
  .required()
  .test({
    name: 'size',
    message: 'The file must be less then 2mb',
    test(value) {
      const file = value as File;
      if (file.size <= 2000000) return true;
      return false;
    },
  })
  .test({
    name: 'extension',
    message: 'Only the following formats are accepted: png, jpeg',
    test(value) {
      const file = value as File;
      if (file.type === 'image/jpeg' || file.type === 'image/png')
        return true;
      return false;
    },
  })
  .transform((value) => {
    if (value.length) return value[0];
    return value;
  }),
});