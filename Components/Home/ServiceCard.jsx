import React from "react";
import { FaLaptopCode, FaSearch } from "react-icons/fa";

export default function ServiceCard() {
  const ServiceData = [
    {
      title: "Custom Design",
      icon: FaLaptopCode,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, molestias rem. Voluptas mollitia ratione deleniti illum! Odio voluptatum, saepe exercitationem consequatur hic error eius iure deserunt vitae! Ea, quae quod",
      image: "/icons/Vector.svg",
      buttonText: "LearnMore➡",
    },
    {
      title: "Research",
      icon: FaSearch,

      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, molestias rem. Voluptas mollitia ratione deleniti illum! Odio voluptatum, saepe exercitationem consequatur hic error eius iure deserunt vitae! Ea, quae quod",
      image: "/icons/Vector.svg",
      buttonText: "LearnMore➡",
    },
    {
      title: "E-commerce",
      icon: FaLaptopCode,
    content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, molestias rem. Voluptas mollitia ratione deleniti illum! Odio voluptatum, saepe exercitationem consequatur hic error eius iure deserunt vitae! Ea, quae quod",
      image: "/icons/Vector.svg",
      buttonText: "LearnMore➡",
    },
    {
      title: "UI/UX Design",
      icon: FaLaptopCode,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, molestias rem. Voluptas mollitia ratione deleniti illum! Odio voluptatum, saepe exercitationem consequatur hic error eius iure deserunt vitae! Ea, quae quod",
      image: "/icons/Vector.svg",
      buttonText: "LearnMore➡",
    },
    {
      title: "SPA Development",
      icon: FaLaptopCode,

      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, molestias rem. Voluptas mollitia ratione deleniti illum! Odio voluptatum, saepe exercitationem consequatur hic error eius iure deserunt vitae! Ea, quae quod",
      image: "/icons/Vector.svg",
      buttonText: "LearnMore➡",
    },
    {
      title: "Web Development",
      icon: FaLaptopCode,

      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, molestias rem. Voluptas mollitia ratione deleniti illum! Odio voluptatum, saepe exercitationem consequatur hic error eius iure deserunt vitae! Ea, quae quod",
      image: "/icons/Vector.svg",
      buttonText: "LearnMore➡",
    },
  ];

  return (
    <>
      <div
        data-aos="fade-up"
        className="grid gap-10 p-10  max-w-5xl  m-auto  sm:grid-cols-3 text-[#FFFFFF]"
      >
        {ServiceData.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="grid grid-cols-1 gap-10 text-white "
          >
            <div className=" rounded-2xl grid grid-cols-1 justify-items-center  w-8 h-8">
              <item.icon
                size={40}
                className="text-white bg-[#2E2E30] py-3 rounded-full "
              />
            </div>
            <div className="grid gap-1">
              <h1 className="text-2xl "> {item.title}</h1>
              <hr className="text-[#F50D32] w-14 border-1 " />
            </div>

            <p>{item.content}</p>
            <button className="grid grid-rows-1 justify-items-start py-2 ">
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
