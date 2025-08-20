import lodkiIqhti from "../assets/lodki_i_qhti.png";
import djetove from "../assets/djetove.png";
import morskaElektronika from "../assets/morska_elektronika.png";
import dvigateli from "../assets/dvigateli.png";
import kolesari from "../assets/kolesari.png";
import ribolov from "../assets/ribolov.png";
import chasti from "../assets/chasti.png";

export const categories = [
  {
    src: lodkiIqhti,
    alt: "Лодки и яхти",
    label: "ЛОДКИ И ЯХТИ",
    eu: "lodki_i_qhti",
  },
  { src: djetove, alt: "Джетове", label: "ДЖЕТОВЕ", eu: "djetove" },
  {
    src: morskaElektronika,
    alt: "Морска електроника",
    label: "МОРСКА ЕЛЕКТРОНИКА",
    eu: "morska_elektronika",
  },
  { src: dvigateli, alt: "Двигатели", label: "ДВИГАТЕЛИ", eu: "dvigateli" },
  { src: kolesari, alt: "Колесари", label: "КОЛЕСАРИ", eu: "kolesari" },
  { src: ribolov, alt: "Риболов", label: "РИБОЛОВ", eu: "ribolov" },
  { src: chasti, alt: "Части", label: "ЧАСТИ", eu: "chasti" },
];

export const categoriesServices = [
  {
    alt: "Ремонт на двиигатели",
    label: "РЕМОНТ НА ДВИГАТЕЛИ",
    eu: "remont_na_dvigateli",
  },
  { alt: "Ремонт на лодки", label: "РЕМОНТ НА ЛОДКИ", eu: "remont_na_lodki" },
];

export const optionsLabelTranslation = {
  typeOptions: "ВИД",
  brandOptions: "МАРКА",
  modelOptions: "МОДЕЛ",
  yearOptions: "ГОДИНА",
  maxPrice: "МАКСИМАЛНА ЦЕНА (лв)",
  maxLength: "МАКСИМАЛНА ДЪЛЖИНА (м)",
  workingHoursOptions: "МАКС РАБОТНИ ЧАСОВЕ",
  osOptions: "ОСИ",
  typeFishOptions: "ЗА ВИД РИБА",
  technicOptions: "ТЕХНИКА НА РИБОЛОВ",
  maxHp: "МАКСИМАЛНИ КОНСКИ СИЛА",
};

export const optionsLabelServicesTranslation = {
  materialOptions: "МАТЕРИАЛ",
  brandOptions: "МАРКА",
  serviceOptions: "ОРТОРИЗИРАН СЕРВИЗ",
};
