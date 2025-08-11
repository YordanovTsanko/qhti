import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook-png.png";
import google from "../../assets/google-png.png";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Невалиден формат на имейл")
      .required("Имейлът е задължителен"),
    password: Yup.string()
      .min(6, "Паролата трябва да бъде поне 6 символа")
      .required("Паролата е задължителна"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log("Login Data:", values);
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-2 p-4 items-start">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="font-semibold font-sans tracking-tight mb-1 after:ps-1 after:content-['*'] after:text-red-500"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="border border-black px-3 py-1 rounded-xl w-[20vw]"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="font-semibold font-sans tracking-tight mb-1 after:ps-1 after:content-['*'] after:text-red-500"
              >
                Парола
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                className="border border-black px-3 py-1 rounded-xl w-[20vw]"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <Link
              to="/forgotten-password"
              className="text-blue-500 font-semibold text-sm font-sans underline tracking-tighter hover:text-blue-400 transition duration-300"
            >
              ЗАБРАВЕНА ПАРОЛА ?
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-white py-1 mt-4 w-[20vw] rounded-xl hover:bg-primary/80 transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Вписване..." : "Вход"}
            </button>
          </Form>
        )}
      </Formik>
      <div className="max-w-[20vw] flex flex-col gap-4 items-center mx-4">
        <h2 className="text-xl">ИЛИ</h2>
        <button className="rounded-2xl bg-[#45619d] text-white w-full py-[6px] text-md flex items-center justify-center transition duration-300 hover:bg-primary/90 font-sans">
          <img src={facebook} alt="Facebook" className="w-6 h-6 inline mr-2" />
          ВХОД С FACEBOOK
        </button>
        <button className="rounded-2xl bg-gray-200 w-full py-[6px] text-md flex items-center justify-center transition duration-300 hover:bg-gray-300 font-sans">
          <img src={google} alt="Google" className="w-6 h-6 inline mr-2" />
          ВХОД С GOOGLE
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
