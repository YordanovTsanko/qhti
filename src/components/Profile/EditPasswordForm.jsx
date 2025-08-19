import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditPasswordForm = () => {
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    oldPassword: Yup.string().required("Старата парола е задължителна"),
    newPassword: Yup.string()
      .min(6, "Новата парола трябва да е поне 6 символа")
      .required("Новата парола е задължителна"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Паролите не съвпадат")
      .required("Потвърждаването на новата парола е задължително"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Submitted values:", values);
    setSubmitting(false);
  };

  return (
    <div className="max-w-lg mx-auto self-center mb-8 w-full sm:w-auto">
      <h2 className="text-2xl font-bold mb-4 text-white sm:-ms-14">
        ПРОМЕНИ ПАРОЛА
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col items-center gap-4 w-full sm:w-80">
            <div className="flex flex-col w-full">
              <label
                htmlFor="oldPassword"
                className="font-semibold text-sm mb-1 text-white"
              >
                СТАРА ПАРОЛА
              </label>
              <Field
                type="password"
                id="oldPassword"
                name="oldPassword"
                placeholder="Въведете старата парола"
                className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <ErrorMessage
                name="oldPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="newPassword"
                className="font-semibold text-sm mb-1 text-white"
              >
                НОВА ПАРОЛА
              </label>
              <Field
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="Въведете нова парола"
                className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <ErrorMessage
                name="newPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="confirmPassword"
                className="font-semibold text-sm mb-1 text-white"
              >
                ПОТВЪРДИ НОВА ПАРОЛА
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Потвърдете новата парола"
                className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-secondary text-white font-semibold py-1 px-4 rounded-lg hover:bg-secondary/90 transition duration-300 disabled:opacity-50"
            >
              ПРОМЕНИ
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditPasswordForm;
