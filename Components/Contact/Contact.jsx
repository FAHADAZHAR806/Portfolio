import React from "react";
import Discover from "../Home/Discover";
import Form from "./Form";
import Address from "./Address";

export default function Contact() {
  return (
    <>
      <div data-aos="fade-up" className="grid grid-cols-1 justify-items-start   bg-[#161616;] w-340 m-auto py-10 px-24 text-white">
        <h1 className="text-3xl font-bold" > Contact</h1>
        <hr className="text-[#F50D32] border px  w-20 mb-6 " />
      </div>
      <Form />
      <Address />
      <Discover />
    </>
  );
}
