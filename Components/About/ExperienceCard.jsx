import React from "react";

export default function ExperienceCard() {
  const cardsData = [
    {
      title: "2014 - 2015 (WEB DESIGNER)",
      description: "FOX MEDIA INC.",
      paragraph:
        "Lorem ipsum dolor sit amet consec tetur adipiscing elit. Ut elit pulvinar dapibus leo.",
    },
    {
      title: "2016 - 2017 (WEB DESIGNER)",
      description: "FOX MEDIA INC.",
      paragraph:
        "Lorem ipsum dolor sit amet consec tetur adipiscing elit. Ut elit pulvinar dapibus leo.",
    },
    {
      title: "2017 - 2018 (WEB DESIGNER)",
      description: "FOX MEDIA INC.",
      paragraph:
        "Lorem ipsum dolor sit amet consec tetur adipiscing elit. Ut elit pulvinar dapibus leo.",
    },
  ];
  return (
    <>
      <div
        data-aos="fade-up"
        className="  bg-[#161616] grid  max-w-5xl m-auto py-10 justify-items-center  gap-3 lg:grid-cols-3    "
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="w-[280px] h-[200px] my-2 grid grid-cols-1 justify-items-center text-white text-center px-4 py-6 border-1 border-white bg-[#2E2E30]"
          >
            <p className="text-[#F50D32]">{card.title}</p>
            <p className="text-xl">{card.description}</p>
            <p>{card.paragraph}</p>
          </div>
        ))}
      </div>
    </>
  );
}
