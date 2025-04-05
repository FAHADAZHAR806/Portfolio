import React from "react";

export default function Testimonial() {
  return (
    <>
      <div data-aos="fade-up" className="Pricing grid justify-items-start  p-4 max-w-5xl m-auto sm:grid-cols-1 sm:justify-items-center text-amber-50">
        <h1 className="text-3xl font-bold"> Testimonials</h1>
        <hr className="text-[#F50D32] w-14  mb-6 " />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        veritatis, <br />{" "}
        <span>
          magni assumenda dolores. Ullam corporis rem temporibus labore?
        </span>
      </div>

      <div data-aos="fade-up" className="grid justify-items-center gap-4 max-w-5xl m-auto my-4 sm:grid-cols-1 sm:justify-items-center lg:grid-cols-3 lg:justify-items-center lg:py-10 ">
        <div data-aos="fade-up" className="grid grid-cols-1  text-amber-50 border-2 border-amber-50 w-70 py-10   rounded-2xl justify-items-center">
          <h1 className="text-8xl text-[#F50D32]">❝</h1>
          <span>
            Lorem ipsum dolor sit <br /> Lorem ipsum dolor sit <br /> Lorem
            ipsum dolor sit.{" "}
          </span>
          <div className="py-2">
            {/* <img src="/images/white.svg" alt="" /> */}
            <img src="/images/William.jpg" className="w-24 h-24 rounded-full object-cover  " alt="William-Roy.jpg" />

          </div>
          <div className="grid grid-cols-1 justify-items-center">
            <h2>William Roy</h2>
            <h4>Accountant</h4>
          </div>
        </div>
        <div data-aos="fade-up" className="grid grid-cols-1  text-amber-50 border-2 border-amber-50 w-70 py-10   rounded-2xl justify-items-center">
          <h1 className="text-8xl text-[#F50D32]">❝</h1>
          <span>
            Lorem ipsum dolor sit <br /> Lorem ipsum dolor sit <br /> Lorem
            ipsum dolor sit.{" "}
          </span>
          <div className="py-2">
            {/* <img src="/images/white.svg" alt="" /> */}
            <img src="/images/Christian-Buehner.jpg" className="w-24 h-24 rounded-full object-cover  " alt="Christian-Buehner.jpg" />
          </div>
          <div className="grid grid-cols-1 justify-items-center">
            <h2>Christian Buehner</h2>
            <h4>Freelancer</h4>
          </div>
        </div>
        <div data-aos="fade-up" className="grid grid-cols-1  text-amber-50 border-2 border-amber-50 w-70 py-10   rounded-2xl justify-items-center">
          <h1 className="text-8xl text-[#F50D32]">❝</h1>
          <span>
            Lorem ipsum dolor sit <br /> Lorem ipsum dolor sit <br /> Lorem
            ipsum dolor sit.{" "}
          </span>
          <div className="py-2">
            {/* <img src="/images/white.svg" alt="" /> */}
            <img src="/images/Yogendra-Singh.jpg" className="w-24 h-24 rounded-full object-cover   " alt="Yogendra.jpg" />
          </div>
          <div className="grid grid-cols-1 justify-items-center">
            <h2>Yoginder Singh</h2>
            <h4>Entrepreneur</h4>
          </div>
        </div>
      </div>
    </>
  );
}
