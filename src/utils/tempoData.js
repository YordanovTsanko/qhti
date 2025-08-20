import productone from "../assets/product-1.png";
import producttwo from "../assets/product-2.png";
import productthree from "../assets/product-3.png";
import companyImg from "../assets/bulstar-logo-1-300x225.png.png";

export const companyUser = {
  id: 101,
  name: "БУЛСТАР АУТДОР ООД",
  type: "business",
  image: companyImg,
  email: "yachts@bulstar.bg",
  passwrod: "123456",
  phone: "0889651515",
  eik: "147026483",
  desc: "Официален вносител на двигатели Mercury и лодки Quicksilver",
};
export const user = {
  id: 100,
  name: "Тестов Акаунт",
  type: "user",
  image: null,
  email: "yachts@bulstar.bg",
  passwrod: "123456",
  phone: "0889651515",
};

export const temporaryProducts = [
  {
    id: 1,
    referenceNumber: "00067",
    src: [productone, producttwo, productthree, productone],
    alt: "Product 1",
    views: 100,
    title: "COHAP HDS PRO",
    price: "350лв.",
    vat: true,
    location: "Бургас, ж-к Славейков",
    date: "Обновено 21.09.2024",
    check: [
      "ДЕКЕМВРИ 2017 Г.",
      "УПОТРЕБЯВАН",
      "SIMRAD",
      "CRUISE",
      "БЕЗ ГАРАНЦИЯ",
      "5 ИНЧА",
    ],
    desc: "Продавам сонар симпад круиз 5 инча, много добър сонар, чисто нов купен през 2017 и вече е с изтекла гаранция иначе не е ползван",
  },
  {
    id: 2,
    referenceNumber: "00068",
    views: 2222,
    src: [productone, producttwo, productthree, productone],
    alt: "Product 2",
    title: "COHAP HDS PRO",
    price: "350лв.",
    vat: false,
    location: "Бургас, ж-к Славейков",
    date: "Обновено 21.09.2024",
    check: [
      "ДЕКЕМВРИ 2017 Г.",
      "УПОТРЕБЯВАН",
      "SIMRAD",
      "CRUISE",
      "БЕЗ ГАРАНЦИЯ",
      "5 ИНЧА",
    ],
    desc: "Продавам сонар симпад круиз 5 инча, много добър сонар, чисто нов купен през 2017 и вече е с изтекла гаранция иначе не е ползван",
  },
  {
    id: 3,
    referenceNumber: "00063",
    views: 1240,
    src: [producttwo, productone, productthree, productone],
    alt: "Product 3",
    title: "COHAP HDS PRO SIMARD 2012",
    price: "ПО ДОГОВАРЯНЕ",
    vat: false,
    location: "Бургас, ж-к Славейков",
    date: "Обновено 21.09.2024",
    check: [
      "ДЕКЕМВРИ 2017 Г.",
      "УПОТРЕБЯВАН",
      "SIMRAD",
      "CRUISE",
      "БЕЗ ГАРАНЦИЯ",
      "5 ИНЧА",
    ],
    desc: "Продавам сонар симпад круиз 5 инча, много добър сонар, чисто нов купен през 2017 и вече е с изтекла гаранция иначе не е ползван",
  },
  {
    id: 4,
    referenceNumber: "00167",
    views: 10000,
    src: [productthree, productone, producttwo, productone],
    alt: "Product 3",
    title: "COHAP HDS PRO",
    price: "ПО ДОГОВАРЯНЕ",
    vat: false,
    location: "Бургас, ж-к Славейков",
    date: "Обновено 21.09.2024",
    check: [
      "ДЕКЕМВРИ 2017 Г.",
      "УПОТРЕБЯВАН",
      "SIMRAD",
      "CRUISE",
      "БЕЗ ГАРАНЦИЯ",
      "5 ИНЧА",
    ],
    desc: "Продавам сонар симпад круиз 5 инча, много добър сонар, чисто нов купен през 2017 и вече е с изтекла гаранция иначе не е ползван",
  },
  {
    id: 5,
    referenceNumber: "01157",
    views: 590,
    src: [producttwo, productthree, productone, productone],
    alt: "Product 3",
    title: "COHAP HDS PRO",
    price: "ПО ДОГОВАРЯНЕ",
    vat: false,
    location: "Бургас, ж-к Славейков",
    date: "Обновено 21.09.2024",
    check: [
      "ДЕКЕМВРИ 2017 Г.",
      "УПОТРЕБЯВАН",
      "SIMRAD",
      "CRUISE",
      "БЕЗ ГАРАНЦИЯ",
      "5 ИНЧА",
    ],
    desc: "Продавам сонар симпад круиз 5 инча, много добър сонар, чисто нов купен през 2017 и вече е с изтекла гаранция иначе не е ползван",
  },
];
export const temporaryServices = [
  {
    id: 1,
    referenceNumber: "00067",
    src: companyImg,
    title: "РЕМОНТ НА ЛОДКИ",
    location: "обл. Бургас, С. Атия",
    date: "21.09.2024",
    desc: "Продавам сонар симпад круиз 5 инча, много добър сонар, чисто нов купен през 2017 и вече е с изтекла гаранция иначе не е ползван",
  },
  {
    id: 2,
    referenceNumber: "00037",
    src: companyImg,
    title: "РЕМОНТ НА ЛОДКИ",
    location: "обл. Бургас, С. Атия",
    date: "21.09.2024",
    desc: "Продавам сонар симпад круиз 5 инча, много добър сонар, чисто нов купен през 2017 и вече е с изтекла гаранция иначе не е ползван",
  },
  {
    id: 3,
    referenceNumber: "02067",
    src: companyImg,
    title: "РЕМОНТ НА ЛОДКИ",
    location: "обл. Бургас, С. Атия",
    date: "21.09.2024",
    desc: "Продавам сонар симпад круиз 5 инча, много добър сонар, чисто нов купен през 2017 и вече е с изтекла гаранция иначе не е ползван",
  },
  {
    id: 4,
    referenceNumber: "04067",
    src: companyImg,
    title: "РЕМОНТ НА ЛОДКИ",
    location: "обл. Бургас, С. Атия",
    date: "21.09.2024",
    desc: "Продавам сонар симпад круиз 5 инча, много добър сонар, чисто нов купен през 2017 и вече е с изтекла гаранция иначе не е ползван",
  },
];
export const tempoDataForSearch = {
  lodki_i_qhti: {
    typeOptions: [
      { value: "Boat", label: "Лодка" },
      { value: "Yacht", label: "Яхта" },
    ],
    brandOptions: [
      { value: "Bayliner", label: "Бейлайнер" },
      { value: "Yamaha", label: "Ямаха" },
      { value: "Sea Ray", label: "Сий Рей" },
    ],
    modelOptions: [
      { value: "175 Bowrider", label: "175 Боурайдер" },
      { value: "242 Limited S", label: "242 Лимитед S" },
      { value: "SPX 190", label: "SPX 190" },
    ],
    yearOptions: [
      { value: "2020", label: "2020" },
      { value: "2019", label: "2019" },
      { value: "2018", label: "2018" },
    ],
    maxPrice: 0,
    maxLength: 0,
  },

  djetove: {
    brandOptions: [
      { value: "Sea-Doo", label: "Сий-Ду" },
      { value: "Kawasaki", label: "Кавазаки" },
      { value: "Yamaha", label: "Ямаха" },
    ],
    modelOptions: [
      { value: "Spark", label: "Спарк" },
      { value: "Ultra 310", label: "Ултра 310" },
      { value: "VX Cruiser", label: "VX Круизър" },
    ],
    yearOptions: [
      { value: "2023", label: "2023" },
      { value: "2022", label: "2022" },
      { value: "2021", label: "2021" },
    ],
    workingHoursOptions: [
      { value: "0", label: "0" },
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "6" },
    ],
    maxPrice: 0,
    maxHp: 0,
  },

  morska_elektronika: {
    typeOptions: [
      { value: "GPS", label: "GPS" },
      { value: "NMEA", label: "NMEA" },
    ],
    brandOptions: [
      { value: "Garmin", label: "Гармин" },
      { value: "Raymarine", label: "Реймарин" },
      { value: "Humminbird", label: "Хъмминбърд" },
    ],
    modelOptions: [
      { value: "EchoMap", label: "ЕкоМап" },
      { value: "Axiom", label: "Аксом" },
      { value: "Helix", label: "Хеликс" },
    ],
    maxPrice: 0,
  },

  dvigateli: {
    typeOptions: [
      { value: "Engine", label: "Двигател" },
      { value: "Motor", label: "Мотор" },
    ],
    brandOptions: [
      { value: "Mercury", label: "Мъркюри" },
      { value: "Suzuki", label: "Сузуки" },
      { value: "Honda", label: "Хонда" },
    ],
    modelOptions: [
      { value: "Verado", label: "Верадо" },
      { value: "DF", label: "DF" },
      { value: "BF", label: "BF" },
    ],
    yearOptions: [
      { value: "2021", label: "2021" },
      { value: "2020", label: "2020" },
      { value: "2019", label: "2019" },
    ],
    maxPrice: 0,
    maxHp: 0,
  },

  kolesari: {
    typeOptions: [
      { value: "Trailer", label: "Ремарке" },
      { value: "Other", label: "Друго" },
    ],
    brandOptions: [
      { value: "Honda", label: "Хонда" },
      { value: "Kawasaki", label: "Кавазаки" },
      { value: "Yamaha", label: "Ямаха" },
    ],
    osOptions: [
      { value: "2-axle", label: "Двуосно" },
      { value: "4-axle", label: "Четириосно" },
    ],
    yearOptions: [
      { value: "2022", label: "2022" },
      { value: "2021", label: "2021" },
      { value: "2020", label: "2020" },
    ],
    maxPrice: 0,
    maxLength: 0,
  },

  ribolov: {
    typeOptions: [
      { value: "river", label: "Река" },
      { value: "lake", label: "Езеро" },
    ],
    brandOptions: [
      { value: "Shimano", label: "Шимано" },
      { value: "Daiwa", label: "Дайва" },
      { value: "Rapala", label: "Рапала" },
    ],
    typeFishOptions: [
      { value: "mackerel", label: "Скумрия" },
      { value: "tuna", label: "Риба тон" },
      { value: "salmon", label: "Сьомга" },
    ],
    technicOptions: [
      { value: "spinning", label: "Спининг" },
      { value: "feeder", label: "Фидер" },
      { value: "bait", label: "Стръв" },
    ],
    maxPrice: 0,
  },

  chasti: {
    typeOptions: [
      { value: "Engine", label: "Двигател" },
      { value: "Hull", label: "Корпус" },
      { value: "Electrical", label: "Електрическа система" },
    ],
    brandOptions: [
      { value: "OEM", label: "ОЕМ" },
      { value: "Aftermarket", label: "Афтърмаркет" },
    ],
    maxPrice: 0,
  },
};

export const tempoDataForSearchService = {
  remont_na_dvigateli: {
    brandOptions: [
      { value: "Boat", label: "Лодка" },
      { value: "Yacht", label: "Яхта" },
    ],
    serviceOptions: [
      { value: "Bayliner", label: "Бейлайнер" },
      { value: "Yamaha", label: "Ямаха" },
      { value: "Sea Ray", label: "Сий Рей" },
    ],
  },
  remont_na_lodki: {
    materialOptions: [
      { value: "Boat", label: "Лодка" },
      { value: "Yacht", label: "Яхта" },
    ]
  },
};

export const tempoNotes = [
  {
    id: 1,
    category: "morska_elektronika",
    typeOptions: "GPS",
    brandOptions: "Garmin",
    modelOptions: "EchoMap",
    yearOptions: "2020",
    interior: ["Винил", "Тоалетна"],
    exterior: ["Тента, Т-ТОП"],
    type: "business",
    saveDate: "2022-01-01",
  },
  {
    id: 2,
    category: "lodki_i_qhti",
    typeOptions: "Boat",
    brandOptions: "Yamaha",
    modelOptions: "242 Limited S",
    yearOptions: "2019",
    type: "private",
    saveDate: "2023-03-15",
  },
  {
    id: 3,
    category: "djetove",
    typeOptions: "none",
    brandOptions: "Kawasaki",
    modelOptions: "Spark",
    yearOptions: "2022",
    type: "business",
    saveDate: "2024-06-20",
  },
];
