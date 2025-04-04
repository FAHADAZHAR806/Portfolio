import React from 'react'

export default function Address() {
  return (
   <>
  <div className='grid gap-4 lg:grid-cols-3 max-w-5xl  m-auto bg-[#161616] text-white my-10 sm:py-10 justify-items-center sm:px-16 '>
      <div className=' grid grid-cols-1 justify-items-center border-1 border-white p-6 rounded-xl gap-2 w-60'>
          <div className='grid grid-cols-1 rounded-4xl justify-items-center w-8 bg-[#F50D32]  h-8 p-2'>
            <img src="/images/message.svg" alt="" />
          </div>
          <p className=' text-center'>fahadkiyani28@gmail.com</p>
      </div>
      <div className=' grid grid-cols-1 justify-items-center border-1 border-white p-6 rounded-xl gap-2 w-60'>
          <div className='grid grid-cols-1 rounded-4xl justify-items-center w-8 bg-[#F50D32]  h-8 p-2'>
            <img src="/images/phone.svg" alt="" />
          </div>
          <p className=' text-center'>+923415742411</p>
      </div>
      <div className=' grid grid-cols-1 justify-items-center border-1 border-white p-6 rounded-xl gap-2 w-60'>
          <div className='grid grid-cols-1 rounded-4xl justify-items-center w-8 bg-[#F50D32]  h-8 p-2'>
            <img src="/images/location.svg" alt="" />
          </div>
          <p className=' text-center'>123 street5 47330</p>
      </div> 
  </div>
   </>
  )
}
