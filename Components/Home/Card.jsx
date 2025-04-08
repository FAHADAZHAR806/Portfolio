import React from "react";
import PriceCard from "./PriceCard";

export default function Card() {
  return (
    <>
      <div data-aos="fade-up" className="Pricing grid w-full justify-items-start p-4 max-w-5xl m-auto sm:grid-cols-1  sm:justify-items-center text-amber-50">
        <h1 className="text-3xl font-bold"> Pricing</h1>
        <hr className="text-[#F50D32] w-14  mb-6 " />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        veritatis, officiis  <br />{" "}
        <span>
          magni assumenda dolores. Ullam corporis rem temporibus labore?
        </span>
      </div>

     <PriceCard/>
    </>
  );
}
