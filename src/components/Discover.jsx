import React from "react";
import { Link } from "react-router-dom";

export default function Discover() {
  return (
    <>
      <div
        data-aos="fade-up"
        className="bg-[#2E2E30] max-w-5xl m-auto justify-items-center py-10  gap-10   rounded-2xl  grid sm:grid-cols-1 text-white  lg:grid-cols-2 lg:py-14 "
      >
        <h2 className="text-xl font-bold">
          Discover How Design <br />
          Can Help Your Business
        </h2>
        <button className="bg-[#F50D32]   py-2 w-40">
          <Link to="/Contact">Contact Me</Link>
        </button>
      </div>
    </>
  );
}
