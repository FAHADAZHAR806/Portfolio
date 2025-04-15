import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";

export default function Skills() {
  const Skills = [
    {
      lang: "HTML",
      icon: FaHtml5,
    },
    {
      lang: "CSS",
      icon: FaCss3Alt,
    },
    {
      lang: "Java Script",
      icon: RiJavascriptFill,
    },
    {
      lang: "Bootstrap",
      icon: FaBootstrap,
    },
    {
      lang: "Tailwind",
      icon: RiTailwindCssFill,
    },
    {
      lang: "React",
      icon: FaReact,
    },
    {
      lang: "Github",
      icon: FaGithub,
    },
    {
      lang: "WordPress",
      icon: FaWordpress,
    },
    {
      lang: "Photoshop",
      icon: DiPhotoshop,
    },
    {
      lang: "Illustrator",
      icon: DiIllustrator,
    },
  ];
  const bgColors = [
    "text-[#e34c26]", // HTML
    "text-[#264de4]", // CSS
    "text-[#f0db4f]", // JS
    "text-[#0d6efd]", // Bootstrap
    "text-[#06B6D4]", // //Tailwind
    "text-[#61DBFB]", // React
    "tex-[#161616]", //Github
    "text-[##00749C]", //Wordpess
    "text-[#00a6ff]", //photoshop
    "text-[#ff0000]", //illustrator
  ];
  return (
    <>
      <div
        data-aos="fade-up"
        className="grid px-10 gap-6 pb-10 max-w-4xl m-auto text-white  justify-items-center grid-cols-2  sm:grid-cols-5  "
      >
        {Skills.map((item, index) => (
          <div
            key={index}
            className="w-24 hover:bg-[#161616] bg-[#2E2E30] shadow-[#2E2E30] shadow-2xl  h-30 justify-items-center  grid  items-center border-1 rounded-sm"
          >
            <item.icon
              size={60}
              className={` ${bgColors[index % bgColors.length]} `}
            />
          </div>
        ))}
      </div>
    </>
  );
}
