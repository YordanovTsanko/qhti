import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditEmailForm = () => {
  const initialValues = {
    currentEmail: "",
    newEmail: "",
  };

  const validationSchema = Yup.object({
    currentEmail: Yup.string()
      .email("Невалиден имейл адрес")
      .required("Текущият имейл е задължителен"),
    newEmail: Yup.string()
      .email("Невалиден имейл адрес")
      .required("Новият имейл е задължителен")
      .notOneOf(
        [Yup.ref("currentEmail")],
        "Новият имейл трябва да е различен от текущия"
      ),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Submitted values:", values);
    setSubmitting(false);
  };

  return (
    <div className="max-w-lg mx-auto self-center mb-8 w-full sm:w-auto">
      <h2 className="text-2xl font-bold mb-4 text-white sm:-ms-14">
       EMAIL АДРЕС
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
                htmlFor="currentEmail"
                className="font-semibold text-sm mb-1 text-white"
              >
                ТЕКУЩ EMAIL АДРЕС
              </label>
              <Field
                type="email"
                id="currentEmail"
                name="currentEmail"
                placeholder="Въведете текущия си имейл"
                className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <ErrorMessage
                name="currentEmail"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="newEmail" className="font-semibold text-sm mb-1 text-white">
                СМЕНИ EMAIL АДРЕС
              </label>
              <Field
                type="email"
                id="newEmail"
                name="newEmail"
                placeholder="Въведете нов имейл"
                className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <ErrorMessage
                name="newEmail"
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

export default EditEmailForm;
