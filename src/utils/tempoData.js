
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
    brandOptions: ["Bayliner", "Yamaha", "Sea Ray"],
    modelOptions: ["175 Bowrider", "242 Limited S", "SPX 190"],
    yearOptions: ["2020", "2019", "2018"],
    maxPrice: 150000,
    maxHp: 300,
  },
  djetove: {
    brandOptions: ["Sea-Doo", "Kawasaki", "Yamaha"],
    modelOptions: ["Spark", "Ultra 310", "VX Cruiser"],
    yearOptions: ["2023", "2022", "2021"],
    maxPrice: 80000,
    maxHp: 310,
  },
  morska_elektronika: {
    brandOptions: ["Garmin", "Raymarine", "Humminbird"],
    modelOptions: ["EchoMap", "Axiom", "Helix"],
    yearOptions: ["2023", "2022", "2020"],
  },
  dvigateli: {
    brandOptions: ["Mercury", "Suzuki", "Honda"],
    modelOptions: ["Verado", "DF", "BF"],
    yearOptions: ["2021", "2020", "2019"],
    maxPrice: 60000,
    maxHp: 350,
  },
  kolesari: {
    brandOptions: ["Honda", "Kawasaki", "Yamaha"],
    modelOptions: ["CRF", "Ninja", "YZF"],
    yearOptions: ["2022", "2021", "2020"],
  },
  ribolov: {
    brandOptions: ["Shimano", "Daiwa", "Rapala"],
    modelOptions: ["Stradic", "Tatula", "X-Rap"],
    yearOptions: ["2022", "2021", "2020"],
  },
  chasti: {
    brandOptions: ["OEM", "Aftermarket"],
    modelOptions: ["Engine Part", "Hull Part", "Electrical"],
    yearOptions: ["2023", "2022", "2021"],
  },
};
