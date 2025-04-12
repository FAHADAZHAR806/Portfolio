import React from "react";

export default function Projects() {
  const Projects = [
    {
      PName: "Hepta Travel",
      Para: "Hepta Clone is a travel website project. I created this theme clone to practice and improve my front-end development skills. The main goal was to enhance my understanding of layout design and styling.",
      buttontext: "See details➡",
      img: "/images/Project2.PNG ",
    },
    {
      PName: "Cafe Dine",
      Para: "Cafe Dine is a simple project that displays various menu options. It allows users to explore different food categories easily. The main purpose of this project is to practice basic front-end skills.",
      buttontext: "See details➡",
      img: "/images/Cafedine.png",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-2 w-full max-w-5xl m-auto">
        {Projects.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="grid lg:grid-cols-2 grid-cols-1 max-w-5xl m-auto py-10 px-4 text-white gap-4"
          >
            {index % 2 === 0 ? (
              <>
                <div className="grid gap-4  sm:grid-col-1 sm:gap-6  text-[#FFFFFF] sm:p-10">
                  <p className="text-4xl">{item.PName}</p>
                  <p>{item.Para}</p>
                  <button
                    className="rounded-2xl w-40 text-left h-10 text-[#F50D32] sm:w-40 sm:h-10"
                    onClick={() =>
                      window.open(
                        "https://nimble-paprenjak-921093.netlify.app/"
                      )
                    }
                  >
                    {item.buttontext}
                  </button>
                </div>

                <div className="bg-white   overflow-hidden shadow-lg hover:scale-105 duration-300 cursor-pointer">
                  <img src={item.img} alt="" className="w-full h-full " loading="lazy"/>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white  overflow-hidden shadow-lg hover:scale-105 duration-300 cursor-pointer">
                  <img src={item.img} alt="" className="w-full h-full  " loading="lazy" />
                </div>

                <div className="grid gap-4  sm:grid-col-1 sm:gap-6  text-[#FFFFFF] sm:p-10">
                  <p className="text-4xl">{item.PName}</p>
                  <p>{item.Para}</p>
                  <button
                    className="rounded-2xl w-40 text-left h-10 text-[#F50D32] sm:w-40 sm:h-10"
                    onClick={() =>
                      window.open(
                        "https://nimble-paprenjak-921093.netlify.app/"
                      )
                    }
                  >
                    {item.buttontext}
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
