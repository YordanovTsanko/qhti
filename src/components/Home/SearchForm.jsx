import React, { useEffect, useMemo, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ReactComponent as ArrowIcon } from "../../assets/arrow-down-svgrepo-com.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as HistoryIcon } from "../../assets/history.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { categories, optionsLabelTranslation } from "../../utils/categories";
import { tempoDataForSearch } from "../../utils/tempoData";

const validationSchema = Yup.object({
  category: Yup.string().required("Изберете категория"),
});

const SearchForm = ({ onSubmit }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const filterParam = searchParams.get("filter");

  const [category, setCategory] = useState(filterParam || categories[0]?.eu);

  useEffect(() => {
    if (category !== filterParam) {
      const newSearchParams = new URLSearchParams(location.search);
      newSearchParams.set("filter", category);
      navigate(`${location.pathname}?${newSearchParams.toString()}`, {
        replace: true,
      });
    }
  }, [category, navigate, filterParam, location.pathname, location.search]);

  useEffect(() => {
    setCategory(filterParam || categories[0]?.eu);
  }, [filterParam]);

  return (
    <Formik
      initialValues={{
        category,
        type: "",
        brand: "",
        model: "",
        year: "",
        maxPrice: "",
        maxHp: "",
        maxLength: "",
        workingHours: "",
        os: "",
        typeFish: "",
        technic: "",
        location1: "",
        location2: "",
        sortBy: "",
        condition: "new",
      }}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={(values) => {
        const submitValues = {
          ...values,
          isUsed: values.condition === "used",
          isNew: values.condition === "new",
          forParts: values.condition === "parts",
        };
        onSubmit(submitValues);
      }}
    >
      {({ values, setFieldValue, handleChange }) => {
        const data = tempoDataForSearch[values.category] || {};

        const selectedCategoryImage = categories.find(
          (cat) => cat.eu === values.category
        )?.src;

        const onCategoryChange = (e) => {
          handleChange(e);
          setCategory(e.target.value);
        };

        const toFieldName = (optKey) =>
          optKey.endsWith("Options") ? optKey.replace(/Options$/, "") : optKey;

        return (
          <Form className="w-full max-w-5xl bg-white p-4 rounded-lg shadow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center gap-4 order-2 md:order-1">
                <div className="flex flex-col relative items-start gap-2 mb-4">
                  <label className="font-bold">ТЪРСЕНЕ В КАТЕГОРИЯ</label>
                  <div className="relative w-[260px]">
                    <Field
                      as="select"
                      name="category"
                      className="border-2 text-xl w-full border-black rounded-lg px-2 py-1 text-secondary font-bold appearance-none pr-10"
                      onChange={onCategoryChange}
                      value={category}
                    >
                      {categories.map(({ eu, label }) => (
                        <option key={eu} value={eu}>
                          {label}
                        </option>
                      ))}
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
                <img
                  src={selectedCategoryImage}
                  alt="Category"
                  className="w-auto h-14"
                />
              </div>
              <div className="flex gap-1 items-center group cursor-pointer self-end md:self-auto">
                <HistoryIcon className="w-8 h-8 hover:text-orange-600" />
                <h3 className="text-secondary font-bold text-sm xl:text-lg group-hover:text-orange-600">
                  ВАШИТЕ ПОСЛЕДНИ ТЪРСЕНИЯ
                </h3>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center md:items-start w-full flex-shrink-0">
              <div className="grid grid-cols-2 gap-4 flex-1 w-full md:w-auto">
                {Object.entries(data).map(([key, val]) => {
                  const fieldName = toFieldName(key);
                  const label =
                    optionsLabelTranslation[key] ||
                    optionsLabelTranslation[fieldName] ||
                    key;

                  return (
                    <div key={key} className="flex flex-col gap-1">
                      <label className="font-bold text-sm md:text-md">{label}</label>
                      {Array.isArray(val) ? (
                        <Field
                          as="select"
                          name={fieldName}
                          className="border border-black text-sm rounded-lg px-2 py-[2px]"
                        >
                          <option value="">ВСИЧКИ</option>
                          {val.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </Field>
                      ) : (
                        <Field
                          type="number"
                          name={fieldName}
                          className="border border-black text-sm rounded-lg px-2 py-[2px]"
                          placeholder=""
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-4 flex-1 w-full md:w-auto">
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-sm md:text-md">НАМИРА СЕ В:</label>
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

                <div className="flex flex-col gap-1 col-span-2">
                  <label className="font-bold text-sm md:text-md">ПОДРЕДИ РЕЗУЛТАТИТЕ ПО:</label>
                  <Field
                    as="select"
                    name="sortBy"
                    className="border border-black text-sm rounded-lg px-2 py-[2px]"
                  >
                    <option value="vsichki">ВИД / МАРКА / ЦЕНА</option>
                  </Field>
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
            </div>

            <div className="flex gap-4 mt-2 xl:-mt-[18px] mb-2 text-xs font-light">
              <label className="flex items-center gap-1">
                <Field
                  type="radio"
                  name="condition"
                  value="used"
                  checked={values.condition === "used"}
                  onChange={() => setFieldValue("condition", "used")}
                />
                УПОТРЕБЯВАНИ
              </label>
              <label className="flex items-center gap-1">
                <Field
                  type="radio"
                  name="condition"
                  value="new"
                  checked={values.condition === "new"}
                  onChange={() => setFieldValue("condition", "new")}
                />
                НОВИ
              </label>
              <label className="flex items-center gap-1">
                <Field
                  type="radio"
                  name="condition"
                  value="parts"
                  checked={values.condition === "parts"}
                  onChange={() => setFieldValue("condition", "parts")}
                />
                НА ЧАСТИ
              </label>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SearchForm;
