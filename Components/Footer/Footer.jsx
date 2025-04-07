import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

import "aos/dist/aos.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="main-container grid  justify-items-center py-10  text-[#FFFFFF] grid-rows-5">
          <h1>Get In Touch With Me</h1>
          <p>Victoria Street No 1, London</p>
          <p>fahadkiyani28@gmail.com</p>
          <p>+923415742411</p>
          <div className=" social-items grid  grid-flow-col gap-4">
           <a href= 'https://www.facebook.com' target='_blank' >  <FaFacebook className="text-white bg-[#2E2E30] rounded-full p-2 w-12 h-12 hover:scale-120 duration-300 hover:border-1 hover:rounded-full hover:border-white hover:animate-bounce" /></a>
           <a href="https://github.com/FAHADAZHAR806"
              target="_blank"> <FaGithub className="text-white bg-[#2E2E30] rounded-full p-2 w-12 h-12 hover:scale-120 duration-300 hover:border-1 hover:rounded-full hover:border-white hover:animate-bounce" /></a>
           <a  href="https://x.com"
              target="_blank" > <FaTwitter className="text-white bg-[#2E2E30] rounded-full p-2 w-12 h-12 hover:scale-120 duration-300 hover:border-1 hover:rounded-full hover:border-white hover:animate-bounce" /></a>
           <a   href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile "
              target="_blank" > <FaLinkedin className="text-white bg-[#2E2E30] rounded-full p-2 w-12 h-12 hover:scale-120 duration-300 hover:border-1 hover:rounded-full hover:border-white hover:animate-bounce" /></a>








            
             
              
           
          </div>
        </div>
      </footer>
    </>
  );
}
