import React from 'react'
import { Link } from 'react-router-dom'

export default function Address() {
  const number="+923415742411"
  const address="Surge Group Of Hostels 6th Road Rawalpindi."
  const email="fahadkiyani28@gmail.com"

  const handleWhatsappClick = () => {
    const url = `https://wa.me/${number}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const handleEmailClick = () => {
    const url = `mailto:${email}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  
  const handleMapClick = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
   <>
  <div data-aos="fade-up" className='grid gap-4 lg:grid-cols-3 max-w-5xl  m-auto bg-[#161616] text-white my-10 sm:py-10 justify-items-center sm:px-16 '>
      <div data-aos="fade-up" className=' grid grid-cols-1 justify-items-center border-1 border-white p-6 rounded-xl gap-2 w-60'>
          <div className='grid grid-cols-1 rounded-4xl justify-items-center w-8 bg-[#F50D32]  h-8 p-2'>
            <img src="/images/message.svg" alt="" />
          </div>
          <p className=' text-center' onClick={handleEmailClick}>{email}</p>
      </div>
      <div  data-aos="fade-up" className=' grid grid-cols-1 justify-items-center border-1 border-white p-6 rounded-xl gap-2 w-60'>
          <div className='grid grid-cols-1 rounded-4xl justify-items-center w-8 bg-[#F50D32]  h-8 p-2'>
            <img src="/images/phone.svg" alt="" />
          </div>
          <p className=' text-center' onClick={handleWhatsappClick}>
        {number}
     </p>
      </div>
      <div data-aos="fade-up" className=' grid grid-cols-1 justify-items-center border-1 border-white p-6 rounded-xl gap-2 w-60'>
          <div className='grid grid-cols-1 rounded-4xl justify-items-center w-8 bg-[#F50D32]  h-8 p-2'>
            <img src="/images/location.svg" alt="" />
          </div>
          <p className=' text-center ' onClick={handleMapClick}>
        {address}
     </p>
      </div> 
  </div>
   </>
  )
}
