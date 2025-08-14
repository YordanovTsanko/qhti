import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Невалиден формат на имейл")
    .required("Имейлът е задължителен"),
  password: Yup.string()
    .min(6, "Паролата трябва да бъде поне 6 символа")
    .required("Паролата е задължителна"),
});


  export const registerSchema = Yup.object().shape({
    accountType: Yup.string().oneOf(["private", "company"]).required(),
    fullName: Yup.string().when("accountType", (accountType, schema) =>
      accountType === "private"
        ? schema.required("Името е задължително")
        : schema
    ),
    companyName: Yup.string().when("accountType", (accountType, schema) =>
      accountType === "company"
        ? schema.required("Името на фирмата е задължително")
        : schema
    ),
    bulstat: Yup.string().when("accountType", (accountType, schema) =>
      accountType === "company"
        ? schema.required("Булстат е задължителен")
        : schema
    ),
    city: Yup.string().when("accountType", (accountType, schema) =>
      accountType === "company"
        ? schema.required("Град/Село е задължително")
        : schema
    ),
    storeName: Yup.string().when("accountType", (accountType, schema) =>
      accountType === "company"
        ? schema.required("Име на магазина е задължително")
        : schema
    ),
    email: Yup.string()
      .email("Невалиден формат на имейл")
      .required("Имейлът е задължителен"),
    address: Yup.string().when("accountType", (accountType, schema) =>
      accountType === "company"
        ? schema.required("Адресът е задължителен")
        : schema
    ),
    phone: Yup.string()
      .min(6, "Телефонният номер е твърде кратък")
      .required("Телефонният номер е задължителен"),
    password: Yup.string()
      .min(6, "Паролата трябва да бъде поне 6 символа")
      .required("Паролата е задължителна"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Паролите не съвпадат")
      .required("Потвърдете паролата"),
    agree: Yup.boolean().oneOf([true], "Трябва да приемете условията"),
  });