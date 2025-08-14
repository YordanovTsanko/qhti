import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { registerSchema } from "../../utils/yup/authSchema";
import FieldWrapper from "./FieldWrapper";

const RegisterForm = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const initialValues = {
    accountType: "private",
    fullName: "",
    companyName: "",
    bulstat: "",
    city: "",
    storeName: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log("Register Data:", values);
    setTimeout(() => setSubmitting(false), 800);
  };

  const privateFields = [
    { name: "fullName", label: "Име и фамилия", type: "text" },
    { name: "email", label: "Email", type: "email" },
    {
      name: "phone",
      label: "Телефонен номер (няма да бъде видим на профила Ви)",
      type: "text",
    },
    { name: "password", label: "Парола", type: "password" },
    { name: "confirmPassword", label: "Потвърди паролата", type: "password" },
  ];

  const companyLeft = [
    { name: "companyName", label: "Име на фирма" },
    { name: "bulstat", label: "Булстат" },
    { name: "city", label: "Град/Село" },
    { name: "password", label: "Парола", type: "password" },
    {
      name: "phone",
      label: "Телефонен номер (няма да бъде видим на профила Ви)",
    },
  ];

  const companyRight = [
    { name: "storeName", label: "Име на магазин" },
    { name: "email", label: "Email", type: "email" },
    { name: "address", label: "Адрес" },
    { name: "confirmPassword", label: "Потвърди паролата", type: "password" },
  ];

  const companyMobileFields = [
    { name: "companyName", label: "Име на фирма" },
    { name: "storeName", label: "Име на магазин" },
    { name: "email", label: "Email", type: "email" },
    { name: "address", label: "Адрес" },
    { name: "bulstat", label: "Булстат" },
    { name: "city", label: "Град/Село" },
    {
      name: "phone",
      label: "Телефонен номер (няма да бъде видим на профила Ви)",
    },
    { name: "password", label: "Парола", type: "password" },
    { name: "confirmPassword", label: "Потвърди паролата", type: "password" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values }) => (
        <Form className="py-2 sm:p-4">
          <div className="flex gap-4 items-center my-2 text-sm">
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
            <div className="grid gap-2 max-w-md">
              {privateFields.map((f) => (
                <FieldWrapper
                  key={f.name}
                  label={f.label}
                  name={f.name}
                  type={f.type}
                />
              ))}
            </div>
          )}

          {values.accountType === "company" && (
            <div className="max-w-4xl mt-4">
              {isMobile ? (
                <div className="grid grid-cols-1 gap-2">
                  {companyMobileFields.map((f) => (
                    <FieldWrapper
                      key={f.name}
                      label={f.label}
                      name={f.name}
                      type={f.type}
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    {companyLeft.map((f) => (
                      <FieldWrapper
                        key={f.name}
                        label={f.label}
                        name={f.name}
                        type={f.type}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    {companyRight.map((f) => (
                      <FieldWrapper
                        key={f.name}
                        label={f.label}
                        name={f.name}
                        type={f.type}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <label className="flex items-start gap-2 mt-4">
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
            className="bg-primary font-sans text-white py-2 mt-2 w-full rounded-xl disabled:opacity-50"
          >
            {isSubmitting ? "РЕГИСТРАЦИЯ..." : "РЕГИСТРАЦИЯ"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
