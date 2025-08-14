import { ErrorMessage, Field } from "formik";

const FieldWrapper = ({ label, name, type = "text", id }) => (
  <div className="flex flex-col w-full">
    <label
      htmlFor={id || name}
      className="font-semibold font-sans tracking-tight mb-1 after:ps-1 after:content-['*'] after:text-red-500"
    >
      {label}
    </label>
    <Field
      type={type}
      name={name}
      id={id || name}
      className="border border-black px-3 py-1 rounded-2xl  w-full lg:w-[20vw]"
    />
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm"
    />
  </div>
);

export default FieldWrapper;
