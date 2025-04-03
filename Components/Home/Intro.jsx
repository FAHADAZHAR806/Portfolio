import React from 'react'
import Service from './Service'
import Card from './Card'
import Selected from './selected'
import Testimonial from './Testimonial'
import Discover from './Discover'
export default function Intro() {
  return (
    <>
   <div className="intro grid   gap-4  w-full px-2   justify-items-start  sm:justify-items-start sm:grid-cols-1 sm:w-full sm:m-auto  md:justify-items-center md:grid-cols-2 md:w-340 md:m-auto md:p-20" >
    <div className='grid grid-col-1 gap-6  text-[#FFFFFF] p-10 sm:p-12'>
    <p  className='text-[#F50D32]'>Hi, I am Fahad Azhar</p>
        <p className='text-4xl'>Front-End <span className='text-[#f57d0dc0]'>Web Developer</span></p>
        <p  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, aliquam, sunt fugiat
        esse sed incidunt quasi fuga veniam obcaecati ut quos eius veritatis maiores numquam  facilis ea maxime molestiae et! Officia commodi molestiae saepe enim necessitatibus magni pariatur nobis id excepturi est labore, quam voluptatum dicta veritatis cum</p>
        <button className='rounded-2xl bg-[#F50D32] w-40 h-10'>Contact me</button>
        
    </div>
        

        <div className='bg-neutral-600 w-74 mx-3 sm:mx-0  sm:w-78 '>
        
        
        <div className='w-76 float-right h-full -my-4 -mr-2 '  >
          
          <img src="/images/bg-white.svg" alt="" className='w-full h-full relative'  /> </div>
          <img src="/images/Design.svg" alt="" className='float-right -mt-90 -mr-6 sm:-mr-8 sm:-mt-101'/>

          
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
