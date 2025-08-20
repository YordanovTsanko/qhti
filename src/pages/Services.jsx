import React from "react";
import Container from "../components/Container";
import ServiceFrom from "../components/Home/ServiceFrom";
import adImg from "../assets/casino_landing_1500lv_756x479_2023.png";
import { temporaryServices } from "../utils/tempoData";
import ServiceCard from "../components/Services/ServiceCard";

const Services = () => {
  return (
    <Container>
      <div className="flex flex-col items-center py-4 px-1 md:px-0">
        <h2 className="text-3xl font-bold text-center text-white mb-4 mt-4">
          БЪЛГАРСКИ МОРСКИ ПАЗАР
        </h2>
        <ServiceFrom />
        <div className="my-8 px-2 flex flex-col gap-4 w-full">
          {temporaryServices ? (
            <>
              {temporaryServices.map((service) => (
                <ServiceCard service={service} />
              ))}
              <div>
                <img
                  src={adImg}
                  alt={"Ad Error"}
                  className="h-44 w-full object-cover"
                />
              </div>
            </>
          ) : (
            <h2 className="text-red-600 bg-red-200 text-center py-2 px-4 rounded-xl font-bold text-md sm:text-xl lg:text-3xl">
              НЯМА НАМЕРЕНИ ОБЯВИ С ТОЗИ ФИЛТЪР
            </h2>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Services;
