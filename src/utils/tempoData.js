import productone from "../assets/product-1.png";
import producttwo from "../assets/product-2.png";
import productthree from "../assets/product-3.png";

export const temporaryProducts = [
  {
    src: productone,
    alt: "Product 1",
    title: "COHAP HDS PRO",
    price: "350лв.",
    location: "Бургас, ж-к Славейков",
    date: "Обновено 21.09.2024",
  },
  {
    src: producttwo,
    alt: "Product 2",
    title: "COHAP HDS PRO",
    price: "350лв.",
    location: "Бургас, ж-к Славейков",
    date: "Обновено 21.09.2024",
  },
  {
    src: productthree,
    alt: "Product 3",
    title: "COHAP HDS PRO",
    price: "ПО ДОГОВАРЯНЕ",
    location: "Бургас, ж-к Славейков",
    date: "Обновено 21.09.2024",
  },
  {
    src: producttwo,
    alt: "Product 3",
    title: "COHAP HDS PRO",
    price: "ПО ДОГОВАРЯНЕ",
    location: "Бургас, ж-к Славейков",
    date: "Обновено 21.09.2024",
  },
  {
    src: productthree,
    alt: "Product 3",
    title: "COHAP HDS PRO",
    price: "ПО ДОГОВАРЯНЕ",
    location: "Бургас, ж-к Славейков",
    date: "Обновено 21.09.2024",
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
