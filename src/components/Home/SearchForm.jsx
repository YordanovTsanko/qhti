import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ReactComponent as ArrowIcon } from "../../assets/arrow-down-svgrepo-com.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as HistoryIcon } from "../../assets/history.svg";

const validationSchema = Yup.object({
  category: Yup.string().required("Изберете категория"),
});

const SearchForm = ({ showSections = true, onSubmit }) => {
  return (
    <Formik
      initialValues={{
        category: "",
        type: "",
        brand: "",
        model: "",
        year: "",
        maxPrice: "",
        maxHp: "",
        location1: "",
        location2: "",
        sortBy: "",
        isUsed: false,
        isNew: true,
        forParts: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ values }) => (
        <Form className="w-full max-w-5xl bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <div className="flex flex-col relative items-start gap-2 mb-4">
              <label className="font-bold">ТЪРСЕНЕ В КАТЕГОРИЯ</label>

              <div className="relative w-[260px]">
                <Field
                  as="select"
                  name="category"
                  className="border-2 text-xl w-full border-black rounded-lg px-2 py-1 text-secondary font-bold appearance-none pr-10"
                >
                  <option value="dvigateli">ДВИГАТЕЛИ</option>
                  <option value="kola">Коли</option>
                  <option value="drugo">Друго</option>
                </Field>

                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                  <ArrowIcon className="w-8 h-8" />
                </div>
              </div>

              <ErrorMessage
                name="category"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex gap-1 items-center group cursor-pointer">
              <HistoryIcon className="w-8 h-8 hover:text-orange-600" />
              <h3 className="text-secondary font-bold text-lg group-hover:text-orange-600">
                ВАШИТЕ ПОСЛЕДНИ ТЪРСЕНИЯ
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="flex flex-col gap-1">
              <label className="font-bold">ВИД</label>
              <Field
                as="select"
                name="type"
                className="border border-black text-sm rounded-lg px-2 py-[2px]"
              >
                <option value="vsichki">ВСИЧКИ</option>
              </Field>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-bold">МАРКА</label>
              <Field
                as="select"
                name="brand"
                className="border border-black text-sm rounded-lg px-2 py-[2px]"
              >
                <option value="vsichki">ВСИЧКИ</option>
              </Field>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-bold">НАМИРА СЕ В:</label>
              <Field
                as="select"
                name="location1"
                className="border border-black text-sm rounded-lg px-2 py-[2px]"
              >
                <option value="vsichki">ВСИЧКИ</option>
              </Field>
            </div>
            <div className="flex flex-col justify-end gap-1">
              <Field
                as="select"
                name="location2"
                className="border border-black text-sm rounded-lg px-2 py-[2px]"
              >
                <option value="vsichki">ВСИЧКИ</option>
              </Field>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="flex flex-col gap-1">
              <label className="font-bold">МОДЕЛ</label>
              <Field
                as="select"
                name="model"
                className="border border-black text-sm rounded-lg px-2 py-[2px]"
              >
                <option value="vsichki">ВСИЧКИ</option>
              </Field>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-bold">ГОДИНА</label>
              <Field
                as="select"
                name="year"
                className="border border-black text-sm rounded-lg px-2 py-[2px]"
              >
                <option value="vsichki">ВСИЧКИ</option>
              </Field>
            </div>

            <div className="flex flex-col gap-1 col-span-2">
              <label className="font-bold">ПОДРЕДИ РЕЗУЛТАТИТЕ ПО:</label>
              <Field
                as="select"
                name="model"
                className="border border-black text-sm rounded-lg px-2 py-[2px]"
              >
                <option value="vsichki">ВИД / МАРКА / ЦЕНА</option>
              </Field>
            </div>
          </div>

          {showSections && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="flex flex-col gap-1">
                <label className="font-bold">МАКСИМАЛНА ЦЕНА (лв):</label>
                <Field
                  type="number"
                  name="MaxPrice"
                  className="border border-black text-sm rounded-lg px-2 py-[2px]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">МАКСИМАЛНИ КОНСКИ СИЛИ (м):</label>
                <Field
                  type="number"
                  name="maxHp"
                  className="border border-black text-sm rounded-lg px-2 py-[2px]"
                />
              </div>

              <div className="flex flex-col gap-4 col-span-2">
                <button
                  type="submit"
                  className="bg-primary justify-center flex items-center gap-1 font-semibold text-3xl text-white px-6 py-2 rounded-3xl"
                >
                  <SearchIcon className="h-8 w-8" />
                  ТЪРСИ
                </button>
                <div className="flex gap-4 items-center font-semibold self-end">
                  <button
                    type="reset"
                    className="text-secondary hover:text-orange-600 underline transition duration-300"
                  >
                    ИЗЧИСТИ ФИЛТРИ
                  </button>
                  <button
                    type="button"
                    className="text-secondary hover:text-orange-600 underline transition duration-300"
                  >
                    ПОДРОБНО ТЪРСЕНЕ
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="flex gap-4 -mt-10 mb-4 text-xs font-light">
            <label className="flex items-center gap-1">
              <Field type="checkbox" name="isUsed" /> УПОТРЕБЯВАНИ
            </label>
            <label className="flex items-center gap-1">
              <Field type="checkbox" name="isNew" /> НОВИ
            </label>
            <label className="flex items-center gap-1">
              <Field type="checkbox" name="forParts" /> НА ЧАСТИ
            </label>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
