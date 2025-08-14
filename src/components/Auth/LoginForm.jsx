import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook-png.png";
import google from "../../assets/google-png.png";
import { loginSchema } from "../../utils/yup/authSchema";
import FieldWrapper from "./FieldWrapper";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log("Login Data:", values);
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col p-4 gap-2 items-start">
            <FieldWrapper label="Email" name="email" type="email" id="email" />
            <FieldWrapper
              label="Парола"
              name="password"
              type="password"
              id="password"
            />

            <Link
              to="/forgotten-password"
              className="text-blue-500 font-semibold text-sm font-sans underline tracking-tighter hover:text-blue-400 transition duration-300"
            >
              ЗАБРАВЕНА ПАРОЛА ?
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-white font-sans py-1 mt-4 w-full lg:w-[20vw] rounded-xl hover:bg-primary/80 transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "ВПИСВАНЕ..." : "ВХОД"}
            </button>
          </Form>
        )}
      </Formik>
      <div className=" lg:max-w-[20vw] flex flex-col gap-4 items-center mx-4">
        <h2 className="text-xl">ИЛИ</h2>
        <button className="rounded-2xl bg-[#45619d] text-white w-full py-[6px] text-sm sm:text-md flex items-center justify-center transition duration-300 hover:bg-primary/90 font-sans">
          <img src={facebook} alt="Facebook" className="w-6 h-6 inline mr-2" />
          ВХОД С FACEBOOK
        </button>
        <button className="rounded-2xl bg-gray-200 w-full py-[6px] text-sm sm:text-md flex items-center justify-center transition duration-300 hover:bg-gray-300 font-sans">
          <img src={google} alt="Google" className="w-6 h-6 inline mr-2" />
          ВХОД С GOOGLE
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
