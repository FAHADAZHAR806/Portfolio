import React from "react";

export default function Testimonial() {
  return (
    <>
      <div
        data-aos="fade-up"
        className="Pricing grid justify-items-start  p-4 max-w-5xl m-auto sm:grid-cols-1 sm:justify-items-center text-amber-50"
      >
        <h1 className="text-3xl font-bold"> Testimonials</h1>
        <hr className="text-[#F50D32] w-14  mb-6 " />
        I take pride in building fast, responsive, and modern websites that help my clients grow <br />{" "}
        <span>
        Here’s what some of them had to say about working with me.
        </span>
      </div>
    </>
  );
}
