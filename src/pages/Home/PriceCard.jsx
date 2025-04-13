import React from "react";
import { SiTicktick } from "react-icons/si";

export default function PriceCard() {
  const CardData = [
    {
      title: "Basic",
      Price: "$30",
      Para: "Simple front-end-development for a starter website",
      list: ["Up to 3 Pages ", "Responsive Design", " Delivery in 3 days"," No Revisions"],
      image: "/icons/Vector.svg",
      buttonText: "Select Plan➡",
      icon:SiTicktick 


    },
    {
      title: "Standard",
      Price: "$60",
      Para: "Advanced front-end-development for a small to medium website",
      list: ["Up to 6 Pages ", "Responsive Design", " Delivery in 7 days", " 2 Free Revisions"],
      image: "/icons/Vector.svg",
      icon:SiTicktick ,
      buttonText: "Select Plan➡",
    },
    {
      title: "Premium",
      Price: "$120",
      Para: "Comprehensive front-end-development for a large website or app.",
      list: ["More than 6 Pages ", "Responsive Design", " Delivery in 14 days", " Support & Revisions"],
      buttonText: "Select Plan➡",
      image: "/icons/trophy.svg",
      icon:SiTicktick ,
    },
  ];

  return (
    <>
      <div
        data-aos="fade-up"
        className="grid justify-items-center gap-4 max-w-5xl m-auto my-4 sm:grid-cols-1 sm:justify-items-center lg:grid-cols-3 lg:justify-items-center lg:py-10"
      >
        {CardData.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="card grid grid-cols-1 gap-2 text-amber-50 border-2 border-amber-50 w-80 h-full py-10 px10 rounded-2xl justify-items-center hover:scale-105 duration-300 cursor-pointer"
          >
            <h2 className="text-2xl">{item.title}</h2>
              <p className="text-center p-4">{item.Para}</p>
           <div className="grid">
           <p className="font-bold  text-3xl">{item.Price}</p>
            <p className="text-center">/project</p>

           </div>
            
            <div className=" grid grid-cols-1 gap-3 py-4 justify-items-start ">
              <li>
                {item.list[0]}
              </li>
              <li>
                {item.list[1]}
              </li>
              <li>
              {item.list[2]}
              </li>
              <li>
              {item.list[3]}
              </li>
            </div>

            <button
              className={` grid grid-rows-1 justify-items-start border-2 border-amber-50 py-2 px-4 rounded-xl
            ${index === 1 ? "bg-[#F50D32] " : "bg-[#161616]"}`}
            >
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
