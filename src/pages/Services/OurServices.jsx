import React from 'react'
import { FaSearch, FaLaptopCode } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { Si99Designs } from "react-icons/si";
import { TbBrandAirtable } from "react-icons/tb";



export default function OurServices() {
  const Services=[
    {
      type:"Research",
      icon:FaSearch,
      para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, expedita..",
      buttontext:"Learn More➡"
    },
    {
      type:"Branding",
      icon:TbBrandAirtable,
      para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, expedita..",
      buttontext:"Learn More➡"
    },
    {
      type:"UI/UX",
      icon:Si99Designs ,
      para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, expedita..",
      buttontext:"Learn More➡"
    },
    {
      type:"Ecommerce",
      icon:CiShop,
      para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, expedita..",
      buttontext:"Learn More➡"
    },
    {
      type:"Custom Design",
      icon:MdDashboardCustomize,
      para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, expedita..",
      buttontext:"Learn More➡"
    },
    {
      type:"Web Development",
      icon:FaLaptopCode,
      para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, expedita..",
      buttontext:"Learn More➡"
    },
  ]

  return (
    <>
    <div data-aos="fade-up" className='grid  sm:grid-cols-2 md:grid-cols-3 max-w-5xl m-auto  justify-items-center text-white bg-[#161616;] py-10 rounded-2xl'>
      {Services.map((item,index)=>(
        <div key={index} data-aos="fade-up" className='border-2 border-white w-60 h-60 my-4 rounded-2xl grid grid-cols-1 justify-items-start p-2'>
        <div className="bg-[#F50D32] rounded-2xl grid grid-cols-1 justify-items-center w-8 h-8">
        <item.icon size={40} className="text-[#F50D32] bg-[#2E2E30] py-3 rounded-full " />
     </div>
     <h1 className='text-[#FFFFFF]'>{item.type}</h1>
     <p>{item.para}</p>
     <button className='grid grid-rows-1 justify-items-start py-2 '>{item.buttontext}</button>
 
        </div>
      ))}
    </div>
    </>
  )
}
