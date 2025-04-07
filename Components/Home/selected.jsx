import React from 'react'

export default function Selected() {

  const projects = [
    {
      id: 1,
      title: "CafeDine",
      image: "/images/Project1.png ", // project image link
      link: "https://cafedine-8bf78f.netlify.app/",
    },
    
  ];
  const projects1 = [
    {
      id: 1,
      title: "Hepta travel",
      image: "/images/Project2.PNG ", // project image link
      link: "https://nimble-paprenjak-921093.netlify.app/",
    },
    
  ];
  return (

    
   <>
    <div data-aos="fade-up" className="Pricing grid w-full justify-items-start p-4 max-w-5xl m-auto sm:grid-cols-1  sm:justify-items-center text-amber-50 ">
        <h1 className="text-3xl font-bold"> SELECTED WORKS</h1>
      <hr className="text-[#F50D32] border px  w-20 mb-6 " />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        veritatis, officiis <br />
        <span>
          magni assumenda dolores. Ullam corporis rem temporibus labore?
        </span>
      </div>
      <div data-aos="fade-up" className="intro grid px-4 py-20 grid-cols-1 gap-4 max-w-5xl m-auto sm:grid-cols-1  sm:justify-items-center  lg:grid-cols-2 ">
    <div className='grid gap-4  sm:grid-col-1 sm:gap-6  text-[#FFFFFF] sm:p-10'>
        <p className='text-4xl'>Hepta Clone</p>
        <p  >Hepta Clone is a travel website project.
I created this theme clone to practice and improve my front-end development skills.
The main goal was to enhance my understanding of layout design and styling.</p>
        <button className='rounded-2xl w-40 text-left  h-10 text-[#F50D32] sm:w-40 sm:h-10' onClick={() => window.open('https://nimble-paprenjak-921093.netlify.app/')}>See Details ➡</button>
        
    </div>
        
   <div className='bg-gray-800 mt-10 w-80 h-80 sm:w-110'>
   <div className="grid grid-cols-1   ">
        {projects1.map((project) => (
          <a
            key={project.id}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white  overflow-hidden shadow-lg hover:scale-105 duration-300 cursor-pointer">
              <img src={project.image} alt={project.title} className="w-full h-80 object-cover " />
            </div>
          </a>
        ))}
      </div>
   </div>
        
      
   </div>

  
   <div data-aos="fade-up" className="intro grid px-4 pb-20 grid-cols-1 gap-4 max-w-5xl m-auto sm:grid-cols-1   sm:justify-items-center lg:grid-cols-2  " >
    
        
   <div className='bg-gray-800 mx-3 sm:mx-0 mt-10 w-80 h-80 sm:w-110'>
   <div className="grid grid-cols-1   ">
        {projects.map((project) => (
          <a
            key={project.id}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white  overflow-hidden shadow-lg hover:scale-105 duration-300 cursor-pointer">
              <img src={project.image} alt={project.title} className="w-full h-80  object-center" />
            </div>
          </a>
        ))}
      </div>
   </div>
   <div className='grid gap-4 mt-10 sm:mt-0  sm:grid-col-1 sm:gap-6  text-[#FFFFFF] sm:p-10'>
        <p className='text-4xl'>Cafe Dine</p>
        <p  >Cafe Dine is a simple project that displays various menu options.
It allows users to explore different food categories easily.
The main purpose of this project is to practice basic front-end skills</p>
        <button className='rounded-2xl w-40 text-left  h-10 text-[#F50D32] sm:w-40 sm:h-10' onClick={() => window.open('https://cafedine-8bf78f.netlify.app/')} >See Details ➡</button>
        
    </div>
      
   </div>
   


   </>
  )
}
