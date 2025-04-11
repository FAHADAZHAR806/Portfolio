import React from 'react'

export default function Skills() {

  const Skills=[
    {
      lang:"HTML"
    },{
      lang:"CSS"
    },{
      lang:"Java Script"
    },
    {
      lang:"Bootstrap"
    },{
      lang:"Tailwind"
    },{
      lang:"React"
    }
  ]
  const bgColors = [
    "bg-[#e34c26]",  // HTML
    "bg-[#264de4]",  // CSS
    "bg-[#f0db4f]",  // JS
    "bg-[#563d7c]",  // Bootstrap
    "bg-[#06B6D4]",  // //Tailwind
    "bg-[#61DBFB]",  // React
    
  
  ];
  return (
   <>
    <div data-aos="fade-up" className="grid gap-4 pb-10 max-w-4xl m-auto text-white  justify-items-center sm:grid-cols-2  ">
      {Skills.map((item,index)=>(
        <div key={index} className=" bg-[#161616]  grid grid-cols-1  ">
        <p>{item.lang}</p>
        <div className=" bg-[#2E2E30] w-60 md:w-80 lg:w-110 h-5">
          <div className={` w-46 sm:w-50 md:w-72  lg:w-104 h-full ${bgColors[index % bgColors.length]} `}></div>
        </div>
      </div>
      ))}
    </div>
   </>
  )
}
