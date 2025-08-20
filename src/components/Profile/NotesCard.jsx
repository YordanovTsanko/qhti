import React from "react";
import { LuSave } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { categories } from "../../utils/categories";
import { tempoDataForSearch } from "../../utils/tempoData";
import formatDate from "../../utils/dateConvertor";

const NotesCard = ({ note }) => {
  const getLabel = () => {
    const category = categories.find((cat) => cat.eu === note.category);
    return category ? category.label : null;
  };

  const getOptionLabels = () => {
    const data = tempoDataForSearch[note.category];
    if (!data) return {};

    const getLabel = (optionKey, value) => {
      if (!data[optionKey]) return null;
      const option = data[optionKey].find((item) => item.value === value);
      return option ? option.label : null;
    };

    return {
      typeLabel: getLabel("typeOptions", note.typeOptions),
      brandLabel: getLabel("brandOptions", note.brandOptions),
      modelLabel: getLabel("modelOptions", note.modelOptions),
      yearLabel: getLabel("yearOptions", note.yearOptions),
    };
  };
  console.log(getOptionLabels());

  return (
    <div className="custom-shadow bg-white p-4 w-full">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0  justify-between sm:items-center">
        <div className="flex gap-2 items-center">
          <LuSave className="text-secondary w-8 h-8" />
          <input
            type="text"
            placeholder="ИМЕ НА ФИЛТЪР..."
            className="border px-2 py-1 rounded-lg outline-none focus:ring-2 ring-gray-400"
          />
          <button
            type="submit"
            className="border border-secondary text-secondary rounded-lg px-2 py-1 font-semibold hover:bg-secondary hover:text-white duration-300 transition"
          >
            ЗАПИШИ ИМЕТО
          </button>
        </div>
        <p className="text-sm text-gray-400 self-end sm:self-auto">
          ЗАПАЗЕНА НА: {formatDate(note?.saveDate)}
        </p>
      </div>
      <div className="mt-3">
        <h3 className="text-md font-semibold text-black">
          КАТЕГОРИЯ: {getLabel()}
        </h3>
        <p className="text-sm text-gray-400 flex flex-wrap gap-1 mt-1">
          {getOptionLabels().typeLabel && (
            <span>ВИД: {getOptionLabels().typeLabel}; </span>
          )}
          {getOptionLabels().brandLabel && (
            <span>МАРКА: {getOptionLabels().brandLabel}; </span>
          )}
          {getOptionLabels().modelLabel && (
            <span>МОДЕЛ: {getOptionLabels().modelLabel}; </span>
          )}
          {getOptionLabels().yearLabel && (
            <span>ГОДИНА: {getOptionLabels().yearLabel}; </span>
          )}
          {note?.interior?.length > 0 && (
            <span>ИНТЕРИОР: {note.interior.join(", ")};</span>
          )}
          {note?.exterior?.length > 0 && (
            <span>ЕКСТЕРИОР: {note.exterior.join(", ")};</span>
          )}
          {note?.type && (
            <span>
              ТИП: ОБЯВА ОТ {note.type === "private" ? "ЧАСТНО ЛИЦЕ" : "ФИРМА"};
            </span>
          )}
        </p>
      </div>
      <div className="mb-8 border-b mt-7 w-[98%] border-gray-400 mx-auto h-px bg-gray-400"></div>
      <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row 
      gap-3 md:gap-0 lg:gap-3 xl:gap-0 items-start justify-between">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" name="" id="" />
          <p className="text-sm">ЖЕЛАЯ ДА ПОЛУЧАВАМ ИЗВЕСТИЯ ЗА НОВИ ОБЯВИ ПО EMAIL</p>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-red-500 flex items-center gap-1"
          >
            {" "}
            <IoMdClose className="h-5 w-5" /> ИЗТРИИ ТЪРСЕНЕТО
          </button>
          <button
            type="button"
            className="text-white bg-primary rounded-lg px-4"
          >
            ВИЖ ОБЯВАТА
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
