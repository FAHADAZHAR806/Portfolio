import React from "react";

export default function TestimonialCard() {
  const Testimonials = [
    {
      text: "❝",
      para: "Boosted my conversions overnight. Super design!.",
      img: "/images/William.jpg",
      person: "William Roy",
      design: "Accountant",
      link: "/",
    },
    {
      text: "❝",
      para: "My site loads in seconds and looks amazing!.",
      img: "/images/Christian-Buehner.jpg",
      person: "Christian Buehner",
      design: "Freelancer",
    },
    {
      text: "❝",
      para: "He nailed the look and feel in no time.",
      img: "/images/Yogendra-Singh.jpg",
      person: "Yoginder Singh",
      design: "Entrepreneur",
    },
  ];
  return (
    <>
      <div
        data-aos="fade-up"
        className="grid justify-items-center gap-4 max-w-5xl m-auto my-4 sm:grid-cols-1 sm:justify-items-center lg:grid-cols-3 lg:justify-items-center lg:py-10  "
      >
        {Testimonials.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="grid grid-cols-1  text-amber-50 border-2 border-amber-50 w-70 py-10   rounded-2xl justify-items-center hover:scale-110 duration-300 cursor-pointer "
          >
            <h1 className="text-8xl text-[#F50D32]">{item.text}</h1>
            <p className="text-center px-6">{item.para}</p>
            <div className="py-2">
              <img
                src={item.img}
                className="w-24 h-24 rounded-full object-cover  "
                alt="William-Roy.jpg"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-1 justify-items-center">
              <h2>{item.person}</h2>
              <h4>{item.design}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
