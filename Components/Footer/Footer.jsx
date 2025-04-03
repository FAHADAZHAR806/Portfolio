import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <footer>
      <div className="main-container grid grid-cols-1 justify-items-center gap-4 p-10  sm:grid-col sm:grid-rows-5 sm:justify-items-center sm:gap-2 sm:p-20 text-[#FFFFFF] sm:w-340 sm:m-auto ">
      <h1>Get In Touch With Me</h1>
      <p>Victoria Street No 1, London</p>
      <p>fahadkiyani28@gmail.com</p>
       <p>+923415742411</p>
       <div className='social-items grid grid grid-flow-col gap-2'>
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
