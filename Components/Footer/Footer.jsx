import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <footer>
      <div className="main-container grid  justify-items-center py-10  text-[#FFFFFF] grid-rows-5">
      <h1>Get In Touch With Me</h1>
      <p>Victoria Street No 1, London</p>
      <p>fahadkiyani28@gmail.com</p>
       <p>+923415742411</p>
       <div className='social-items grid  grid-flow-col gap-2 animate-bounce'>
        <Link><img src="/icons/Group 35.svg" alt="logo.svg" /></Link>
        <Link><img src="/icons/Group 36.svg" alt="" /></Link>
        <Link><img src="/icons/Group 37.svg" alt="" /></Link>
        <Link><img src="/icons/Group 38.svg" alt="" /></Link>
        
       </div>

      </div>
    </footer>
    </>
  )
}
