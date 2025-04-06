import React from "react";

export default function Experience() {

  const cardsData = [
   {card1: {
      title: "2014 - 2015 (WEB DESIGNER)",
      description: "FOX MEDIA INC.",
      paragraph: "Lorem ipsum dolor sit amet consec tetur adipiscing elit. Ut elit pulvinar dapibus leo."
    },
    card2: {
      title: "2016 - 2017 (WEB DESIGNER)",
      description: "FOX MEDIA INC.",
      paragraph: "Lorem ipsum dolor sit amet consec tetur adipiscing elit. Ut elit pulvinar dapibus leo."
    },
    card3: {
      title: "2017 - 2018 (WEB DESIGNER)",
      description: "FOX MEDIA INC.",
      paragraph: "Lorem ipsum dolor sit amet consec tetur adipiscing elit. Ut elit pulvinar dapibus leo."
    },

    
  },
  

  ];
  return (

    
    <>
      <div  data-aos="fade-up"className="Experience grid w-full justify-items-start p-4 max-w-5xl m-auto sm:grid-cols-1  sm:justify-items-center text-amber-50 ">
        <h1 className="text-3xl font-bold"> Experience & Skills</h1>
        <hr className="text-[#F50D32] border px  w-20 mb-6 " />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        veritatis, officiis <br />
        <span>
          magni assumenda dolores. Ullam corporis rem temporibus labore?
        </span>
        </div>
        <div  data-aos="fade-up"className="  bg-[#161616] grid  max-w-5xl m-auto py-10 justify-items-center sm:grid-cols-1  gap-3 lg:grid-cols-3    ">
        {cardsData.map((card, index) => (
          <div data-aos="fade-up" key={index} className="w-[280px] h-[200px] my-2 grid grid-cols-1 justify-items-center text-white text-center px-4 py-6 border-1 border-white bg-[#2E2E30]">
            <p className="text-[#F50D32]">{card.card1.title}</p>
            <p className="text-xl">{card.card1.description}</p>
            <p>
              {card.card1.paragraph}
            </p>
          </div>
))}
 {cardsData.map((card, index) => (
          <div data-aos="fade-up" key={index} className="w-[280px] h-[200px] my-2 grid grid-cols-1 justify-items-center text-white text-center px-4 py-6 border-1 border-white bg-[#2E2E30]">
            <p className="text-[#F50D32]">{card.card2.title}</p>
            <p className="text-xl">{card.card2.description}</p>
            <p>
              {card.card1.paragraph}
            </p>
            
          </div>
))}
 {cardsData.map((card, index) => (
          <div data-aos="fade-up" key={index} className="w-[280px] h-[200px] my-2 grid grid-cols-1 justify-items-center text-white text-center px-4 py-6 border-1 border-white bg-[#2E2E30]">
            <p className="text-[#F50D32]">{card.card3.title}</p>
            <p className="text-xl">{card.card3.description}</p>
            <p>
              {card.card3.paragraph}
            </p>
          </div>
))}


        </div>
        <div data-aos="fade-up" className="grid gap-4 pb-10 max-w-4xl m-auto text-white  justify-items-center sm:grid-cols-2  ">
          <div  className=" bg-[#161616]  grid grid-cols-1  ">
            <p>HTML</p>
            <div className=" bg-[#2E2E30] w-60 md:w-80 lg:w-110 h-5">
              <div className="bg-[#e34c26] w-46 sm:w-50 md:w-72  lg:w-104 h-full"></div>
            </div>
          </div>
          <div   className=" bg-[#161616]  grid grid-cols-1 ">
            <p>CSS</p>
            <div className="  bg-[#2E2E30] w-60 md:w-80 lg:w-110 h-5">
              <div className="bg-[#264de4] w-46 sm:w-50 md:w-72  lg:w-104 h-full"></div>
            </div>
          </div>
          <div className=" bg-[#161616]  grid grid-cols-1  ">
            <p>Bootstrap</p>
            <div className=" bg-[#2E2E30] w-60 md:w-80 lg:w-110 h-5">
              <div className="bg-[#563d7c] w-46 sm:w-50 md:w-72  lg:w-104 h-full"></div>
            </div>
          </div>
          <div className=" bg-[#161616]  grid grid-cols-1 ">
            <p>Tailwind</p>
            <div className="  bg-[#2E2E30] w-60 md:w-80 lg:w-110 h-5">
              <div className="bg-sky-300 w-46 sm:w-50 md:w-72  lg:w-104 h-full"></div>
            </div>
          </div>
          <div className=" bg-[#161616]  grid grid-cols-1  ">
            <p>React</p>
            <div className=" bg-[#2E2E30] w-60 md:w-80 lg:w-110 h-5">
              <div className="bg-[#61dbfb] w-46 sm:w-50 md:w-72  lg:w-104 h-full"></div>
            </div>
          </div>
          <div className=" bg-[#161616]  grid grid-cols-1 ">
            <p>Java Script</p>
            <div className="  bg-[#2E2E30] w-60 md:w-80 lg:w-110 h-5">
              <div className="bg-[#f0db4f] w-46 sm:w-50 md:w-72  lg:w-104 h-full"></div>
            </div>
          </div>
         
          
         
        </div>
      
    </>
  );
}
