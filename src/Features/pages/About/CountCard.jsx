import React from 'react'

export default function CountCard() {
  const Card=[{
    Num:80,
    Text:"Project",
  },
  {
    Num:20,
    Text:"Client",
  },
  {
    Num:14,
    Text:"Awards",
  },
  {
    Num:32,
    Text:"Repos",
  },
]



  return (
    <>
    <div data-aos="fade-up" className='grid gap-6 max-w-5xl m-auto sm:grid-cols-4   sm:gap-0  py-10  justify-items-center text-white '>
    {Card.map((item,index)=>(
 <div key={index} >
 <p className='text-2xl  '>{item.Num}</p>
 <p className='text-[#F50D32]'>{item.Text}</p>
 </div>
      ))}
      
        </div>
    </>
  )   
}
