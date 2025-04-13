import React from "react";
import { FaLaptopCode, FaSearch } from "react-icons/fa";

export default function ServiceCard() {
  const ServiceData = [
    {
      title: "Custom Design",
      icon: FaLaptopCode,
      content:
      "Get a front-end design that’s made just for you. Whether you’re starting a new project or updating an old one, this service gives you a clean, responsive, and modern website tailored to match your style and goals. It’s all about making your site look great and work smoothly on every device.",
      image: "/icons/Vector.svg",
      buttonText: "LearnMore➡",
    },
    {
      title: "Research",
      icon: FaSearch,

      content:
        "Need help understanding what works best for your website or app? With thorough research, I explore design trends, user behavior, and competitor analysis to guide your project in the right direction. This helps create a smarter, more effective front-end that’s based on real insights — not just guesswork.",
      image: "/icons/Vector.svg",
      buttonText: "LearnMore➡",
    },
    {
      title: "E-commerce",
      icon: FaLaptopCode,
    content:
        "Want to launch or upgrade your online store? This service focuses on building a responsive, user-friendly, and visually appealing e-commerce front-end. From product pages to smooth checkout flows, everything is designed to give your customers a great shopping experience on any device.",
      image: "/icons/Vector.svg",
      buttonText: "LearnMore➡",
    },
    {
      title: "UI/UX Design",
      icon: FaLaptopCode,
      content:
        "Good design is more than just looks it’s about how users feel and interact with your website. This service focuses on creating clean, user-friendly interfaces that are easy to navigate and visually appealing. From wireframes to final design, every step is built around a smooth and thoughtful user experience.",
      image: "/icons/Vector.svg",
      buttonText: "LearnMore➡",
    },
    {
      title: "SPA Development",
      icon: FaLaptopCode,

      content:
        "Looking for a fast and seamless web experience? This service provides a fully responsive Single Page Application (SPA) built using modern technologies like React. Unlike traditional websites, SPAs load content dynamically without full page reloads, resulting in smoother navigation and a faster, more engaging user experience. ",
      image: "/icons/Vector.svg",
      buttonText: "LearnMore➡",
    },
    {
      title: "Web Development",
      icon: FaLaptopCode,

      content:
        "Need a website that looks great and works smoothly? This service covers everything from layout to functionality — building responsive, modern websites using the latest web technologies. Whether it’s a simple landing page or a full-featured site, we’ll bring your ideas to life on the web.",
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
