import React from "react";

export default function Institue() {
    const Institute=[{
      Name:"COMSATS University Islamabad - Abbottabad Campus",
      Year:"2018 -2022",
      Title:"Bachelor of Science in Software Engineering",
      logo:"/images/Comsats.png",
    },
  
   {Name:"Fauji Foundation Higher Secondary School Matore",
    Year:"2015 -2017",
    Title:"FSc Pre-Engineering",
    logo:"/images/Kahuta.png",
   },
   {Name:"Fauji Foundation Model School Kahuta",
    Year:"2011 -2015",
    Title:"Matriculation",
    logo:"/images/Kahuta.png",
   },
  
  ]

  return (
    <>
      <div
        data-aos="fade-up"
        className="  bg-[#161616] grid  max-w-5xl m-auto py-10 justify-items-center  gap-4 lg:grid-cols-3    "
      >
      {Institute.map((item,index)=>(
        <div key={index}  data-aos="fade-up"  className="w-[280px] h-[280px] my-2 grid grid-cols-2 items-center text-white text-center px-4 py-6 border-1 border-white bg-[#2E2E30]">
          <div className="grid items-center"> <img src={item.logo} className="bg-[#161616 ] w-full h-full " alt="" /></div>
         <div >
          <h1 >{item.Name}</h1>
          <p className="text-[#F50D32]">{item.Year}</p>
          <h2>{item.Title}</h2>
         </div>

        
        </div>
      ))}

      </div>
    </>
  );
}
