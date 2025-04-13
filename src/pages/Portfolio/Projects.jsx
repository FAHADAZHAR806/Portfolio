import React from 'react'
const Project=[
  {
  img:"/images/Project2.PNG",
  Pname:"" ,
  Para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo debitis asperiores recusandae ab at, ea dignissimos. Qui soluta sapiente itaque!",
  buttontext:"Live Demo ➡"
},
{
  img:"/images/Avo.PNG",
  Pname:"",
  Para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo debitis asperiores recusandae ab at, ea dignissimos. Qui soluta sapiente itaque!",
  buttontext:"Live Demo ➡"
},
{img:"/images/World.PNG",
  Pname:"",
  Para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo debitis asperiores recusandae ab at, ea dignissimos. Qui soluta sapiente itaque!",
  buttontext:"Live Demo ➡"
},
{
  img:"/images/Project2.PNG ",
  Pname:"",
  Para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo debitis asperiores recusandae ab at, ea dignissimos. Qui soluta sapiente itaque!",
   buttontext:"Live Demo ➡"
},
{
  img:"/images/Cafedine.png" ,
  Pname:"",
  Para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo debitis asperiores recusandae ab at, ea dignissimos. Qui soluta sapiente itaque!",
  buttontext:"Live Demo ➡"
},
{
  img:"/images/Project2.PNG",
  Pname:"",
  Para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo debitis asperiores recusandae ab at, ea dignissimos. Qui soluta sapiente itaque!",
  buttontext:"Live Demo ➡"
},

]
export default function Projects() {
  return (
    <>
<div data-aos="fade-up"  className="grid  lg:grid-cols-3  w-full max-w-7xl py-10 px-10 bg-[#161616cdd] gap-4 m-auto ">
 {Project.map((item,index)=>(
  <div key={index} className='bg-[#2E2E30] text-white bg- grid grid-cols-1 justify-items-start gap-4 py-10 px-10 border-2 rounded-md  w-full h-full hover:scale-105 duration-300'> 
  <div >
    <img src={item.img} alt="Project1.png" className='w-full h-full object-cover ' loading="lazy" />
  </div>
  <div className=' shadow-2xl shadow-black  '>
    <h1 className='text-xl py-2'>E-commerce website</h1>
    <p className='py-2'>{item.Para}</p>
  </div>
  <div >
    <button className='bg-[#F50D32] px-2 py-2 rounded-xl'>{item.buttontext}</button>

  </div>
 </div>
 ))}

</div>

    </>
  )
}
