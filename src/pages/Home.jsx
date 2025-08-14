import Container from "../components/Container";
import NewProducts from "../components/Home/NewProducts";
import { temporaryProducts } from "../utils/tempoData";
import adImg from "../assets/casino_landing_1500lv_756x479_2023.png";
import Categories from "../components/Home/Categories";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../components/Home/SearchForm";

const Home = () => {
  const [searchParams] = useSearchParams();
  const labelFromUrl = searchParams.get("filter");

  const handeSumbitSearch = (values) => {
    console.log(values);
  };

  return (
    <Container>
      <div className="flex flex-col items-center py-4 md:px-0">
        <h2 className="text-3xl font-bold text-center text-white mb-4 mt-4">
          БЪЛГАРСКИ МОРСКИ ПАЗАР
        </h2>
        {labelFromUrl ? <SearchForm onSubmit={handeSumbitSearch}/> : <Categories />}
        <div className="mt-6 mb-8 border-b-2 border-white h-px bg-white w-full"></div>
        <div className="space-y-10 w-full px-1 sm:px-0">
          <NewProducts
            title="НАЙ-НОВО ОТ СОНАРИ"
            products={temporaryProducts}
          />
          <NewProducts title="НАЙ-НОВО ОТ ЛОДКИ" products={temporaryProducts} />
          <div>
            <img
              src={adImg}
              alt={"Ad Error"}
              className="h-44 w-full object-cover"
            />
          </div>
          <NewProducts
            title="НАЙ-НОВО ОТ ДВИГАТЕЛИ"
            products={temporaryProducts}
          />
          <NewProducts
            title="НАЙ-НОВО ОТ АКСЕСОАРИ"
            products={temporaryProducts}
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
