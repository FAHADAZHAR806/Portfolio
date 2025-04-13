import React from "react";

export default function SelectedWork() {
  const Work = [
    {
      para: "eCommerce Web App Development Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
      buttontext: "See Details➡",
       img:"/images/Cafedine.png",
     
    },
    {
      para: "eCommerce Web App Development Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
      buttontext: "See Details➡",
       img:"/images/Project2.PNG",
    },
    {
      para: "eCommerce Web App Development Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
      buttontext: "See Details➡",
       img:"/images/Avo.PNG"
    },
    {
      para: "eCommerce Web App Development Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
      buttontext: "See Details➡",
       img:"/images/World.PNG"
    },
  ];
  return (
    <>
      <div
        data-aos="fade-up"
        className="grid my-20 px-4 max-w-5xl m-auto sm:grid-cols-1  lg:grid-cols-2  justify-items-center text-white  "
      >
        {Work.map((item, index) => (
          <div key={index} data-aos="fade-up" className="grid gap-4 pb-6 ">
            <div className=" w-80 h-60 sm:w-110 sm:h-70 bg-[#161616]">
              <img src={item.img} alt="" loading="lazy" className="w-full h-full" />
            </div>
            <div className=" grid w-90  sm:grid-cols-1 text-left sm:w-110 justify-items-start">
              <p className="">{item.para}</p>

              <button className=" text-[#F50D32] py-2 px-4">
                {item.buttontext}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
