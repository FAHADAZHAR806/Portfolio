import React from 'react'

export default function Form() {
  return (
   <>
   <div className='grid sm:grid-cols-2 bg-[#161616] text-white sm:w-340 sm:m-auto justify-items-center  '>
    <div className=' px-16 py-6 sm:px-22'> 
    <h1 className="text-3xl font-bold"> GET IN TOUCH</h1>
        <hr className="text-[#F50D32] border px  w-22 my-2 " />
      
       <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
        Magni a neque tenetur vel exercitationem iusto eos ut, quasi assumenda deserunt?</p>
       
    </div>
    <div className=' '>
      <div className='grid sm:grid-cols-2 sm:grid-rows-2 gap-4'>
        <div className='grid grid-cols-1 gap-1 '>
         <p>Name</p>
         <input type="text" name="" id="" className='bg-[#343434]' />
        </div>
        <div className='grid grid-cols-1 gap-1 justify-items-start'>
         <p>Email</p>
         <input type="email" name="" id="" className='bg-[#343434]' />
         
        </div>
        <div className='grid grid-cols-1 gap-1 justify-items-start'>
         <p>Phone Number</p>
         <input type="number" name="" id="" className='bg-[#343434]' />
        
         
        </div>
        <div className='grid grid-cols-1 gap-1 justify-items-start'>
         <p>Subject</p>
         <input type="text" name="" id="" className='bg-[#343434]' />
        </div>
      </div>
      <div className='grid pt-4   sm:grid-cols-1 gap-4 '>
         <p>Message</p>
         <textarea name="" id="" className='bg-[#343434] w-full h-26'></textarea>
         <button className=' bg-[#F50D32] py-2 px-4 rounded-xl w-40' >Send Message</button>
         </div>
    </div>
   </div>
   </>
  )
}
