import React from 'react'
import Service from './Service'
import Card from './Card'
import Selected from './selected'
import Testimonial from './Testimonial'
import Discover from './Discover'
export default function Intro() {
  return (
    <>
   <div className="intro grid   gap-20  max-w-5xl m-auto p-6   justify-items-center   sm:grid-cols-1  lg:grid-cols-2 lg:gap-0 lg:py-20 lg:px-0" >
    <div className='grid grid-col-1 gap-6  text-[#FFFFFF] '>
    <p  className='text-[#F50D32]'>Hi, I am Fahad Azhar</p>
        <p className='text-4xl'>Front-End <span className='text-[#f57d0dc0]'>Web Developer</span></p>
        <p  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, aliquam, sunt fugiat
        esse sed incidunt quasi fuga veniam obcaecati ut quos eius veritatis maiores numquam  facilis ea maxime molestiae et! Officia commodi molestiae saepe enim necessitatibus magni pariatur nobis id excepturi est labore, quam voluptatum dicta veritatis cum</p>
        <button className='rounded-2xl bg-[#F50D32] w-40 h-10'>Contact me</button>
        
    </div>
        

       
        
        
        <div className='w-90     border-[#EA5D20] border-2 animate-pulse rounded-full  '  >
          
          {/* <img src="/images/bg-white.svg" alt="" className='w-full h-full relative'  />  */}
          
          <img src="/images/Fahadpicafo.png" alt="Fahad.png"  className='w-full h-full relative object-cover   rounded-full drop-shadow-md'style={{ boxShadow: '0 0 60px  #EA5D20, 0 0 80px  #EA5D20, 0 0 90px   #EA5D20' }}
          />
          
          </div>

          
         
        
      
   </div>
   <Service/>
   <Card/>
  <Selected/>
  <Testimonial/>
  <Discover/>
    </>
  )
}
