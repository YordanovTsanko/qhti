import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const initialValues = {
    accountType: "private",
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  };

  const validationSchema = Yup.object().shape({
    accountType: Yup.string().oneOf(["private", "company"]).required(),
    fullName: Yup.string().when("accountType", (accountType, schema) =>
      accountType === "private"
        ? schema.required("Името е задължително")
        : schema.notRequired()
    ),
    companyName: Yup.string().when("accountType", (accountType, schema) =>
      accountType === "company"
        ? schema.required("Името на фирмата е задължително")
        : schema.notRequired()
    ),
    email: Yup.string()
      .email("Невалиден формат на имейл")
      .required("Имейлът е задължителен"),
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

  const onSubmit = (values, { setSubmitting }) => {
    console.log("Register Data:", values);
    setTimeout(() => setSubmitting(false), 800);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values }) => (
        <Form className="flex flex-col gap-3 p-4">
          <div className="flex gap-4 items-center my-2 text-xs">
            <label className="flex items-center gap-2 font-sans font-semibold">
              <Field type="radio" name="accountType" value="private" />
              <span>ЧАСТНО ЛИЦЕ</span>
            </label>
            <label className="flex items-center gap-2 font-sans font-semibold">
              <Field type="radio" name="accountType" value="company" />
              <span>ФИРМА</span>
            </label>
          </div>

          {values.accountType === "private" && (
            <div className="flex flex-col w-[20vw]">
              <label htmlFor="fullName" className="font-semibold mb-1 after:ps-1 after:content-['*'] after:text-red-500">
                Име и фамилия
              </label>
              <Field
                id="fullName"
                name="fullName"
                className="border border-black px-3 py-1 rounded-xl"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          )}

          {values.accountType === "company" && (
            <div className="flex flex-col w-[20vw]">
              <label htmlFor="companyName" className="font-semibold mb-1 after:ps-1 after:content-['*'] after:text-red-500">
                Име на фирмата
              </label>
              <Field
                id="companyName"
                name="companyName"
                className="border border-black px-3 py-1 rounded-xl"
              />
              <ErrorMessage
                name="companyName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          )}

          <div className="flex flex-col w-[20vw]">
            <label htmlFor="email" className="font-semibold mb-1 after:ps-1 after:content-['*'] after:text-red-500">
              Email
            </label>
            <Field
              id="email"
              type="email"
              name="email"
              className="border border-black px-3 py-1 rounded-xl"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="flex flex-col w-[20vw]">
            <label htmlFor="phone" className="font-semibold mb-1 after:ps-1 after:content-['*'] after:text-red-500">
              Телефонен номер
            </label>
            <Field
              id="phone"
              name="phone"
              className="border border-black px-3 py-1 rounded-xl"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="flex flex-col w-[20vw]">
            <label htmlFor="password" className="font-semibold mb-1 after:ps-1 after:content-['*'] after:text-red-500">
              Парола
            </label>
            <Field
              id="password"
              type="password"
              name="password"
              className="border border-black px-3 py-1 rounded-xl"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="flex flex-col w-[20vw]">
            <label htmlFor="confirmPassword" className="font-semibold mb-1 after:ps-1 after:content-['*'] after:text-red-500">
              Потвърди паролата
            </label>
            <Field
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              className="border border-black px-3 py-1 rounded-xl"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <label className="flex items-start gap-2">
            <Field type="checkbox" name="agree" className="mt-1" />
            <span className="text-sm font-sans font-semibold">
              Декларирам, че съм съгласен с{" "}
              <Link to="/terms" className="underline">
                Общите условия
              </Link>{" "}
              и{" "}
              <Link to="/privacy" className="underline">
                Политиката за поверителност
              </Link>
              , и ги приемам.
            </span>
          </label>
          <ErrorMessage
            name="agree"
            component="div"
            className="text-red-500 text-sm"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-white py-1 mt-2 w-[20vw] rounded-xl disabled:opacity-50"
          >
            {isSubmitting ? "Регистрация..." : "РЕГИСТРАЦИЯ"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
