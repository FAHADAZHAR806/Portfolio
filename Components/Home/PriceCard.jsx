import React from "react";

export default function PriceCard() {
  const CardData = [
    {
      title: "Silver",
      Price: "20$",
      list: ["Up to 3 Pages ", "3 Days", " Yes(1 Week)"],
      image: "/icons/Vector.svg",
      buttonText: "Select Plan➡",
    },
    {
      title: "Gold",
      Price: "50$",
      list: ["Up to 6 Pages ", "6 Days", " Yes(1 Months)"],
      image: "/icons/Vector.svg",

      buttonText: "Select Plan➡",
    },
    {
      title: "Platinum",
      Price: "$100",
      list: ["More than 6 Pages ", "12 Days", " Yes(3 Months)"],
      buttonText: "Select Plan➡",
      image: "/icons/trophy.svg",
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
            className="card grid grid-cols-1 gap-2 text-amber-50 border-2 border-amber-50 w-80 h-full py-10 px10 rounded-2xl justify-items-center"
          >
            <h2 className="text-xl">{item.title}</h2>
            <div className="bg-[#F50D32] rounded-3xl grid grid-cols-1 w-10 h-full ">
              <span className="p-2 ">
                <img src="/icons/Vector.svg" alt="" />
              </span>
            </div>
            <p className="font-bold p-2 text-4xl">{item.Price}</p>

            <div className=" grid grid-cols-1 gap-10 py-10 ">
              <li className="list-image-[url(/icons/Group14.svg)] ">
                <span className="relative -top-2">{item.list[0]}</span>
              </li>
              <li className="list-image-[url(/icons/Group14.svg)] ">
                <span className="relative -top-2">{item.list[1]}</span>
              </li>
              <li className="list-image-[url(/icons/Group14.svg)] ">
                <span className="relative -top-2">{item.list[2]}</span>
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
