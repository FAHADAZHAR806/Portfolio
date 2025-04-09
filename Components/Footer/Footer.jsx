import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";

export default function Footer() {
  const number="+923415742411"
  const email="fahadkiyani28@gmail.com"
  const address="Surge Group  6th Road Rawalpindi."

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
      <footer>
        <div className="main-container grid  justify-items-center py-10  text-[#FFFFFF] grid-rows-5">
          <h1>Get In Touch With Me</h1>
          <p  className="text-center" onClick={handleMapClick}>{address} </p>
          <p onClick={handleEmailClick}>{email}</p>
          <p onClick={handleWhatsappClick}>{number}</p>
          <div className=" social-items grid  grid-flow-col gap-4">
           <Link to= 'https://www.facebook.com' target='_blank' >  <FaFacebook className="text-white bg-[#2E2E30] rounded-full p-2 w-12 h-12 hover:scale-120 duration-300 hover:border-1 hover:rounded-full hover:border-white hover:animate-bounce" /></Link>
           <Link to="https://github.com/FAHADAZHAR806"
              target="_blank"> <FaGithub className="text-white bg-[#2E2E30] rounded-full p-2 w-12 h-12 hover:scale-120 duration-300 hover:border-1 hover:rounded-full hover:border-white hover:animate-bounce" /></Link>
           <Link  to="https://x.com"
              target="_blank" > <FaTwitter className="text-white bg-[#2E2E30] rounded-full p-2 w-12 h-12 hover:scale-120 duration-300 hover:border-1 hover:rounded-full hover:border-white hover:animate-bounce" /></Link>
           <Link   to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile "
              target="_blank" > <FaLinkedin className="text-white bg-[#2E2E30] rounded-full p-2 w-12 h-12 hover:scale-120 duration-300 hover:border-1 hover:rounded-full hover:border-white hover:animate-bounce" /></Link>








            
             
              
           
          </div>
        </div>
      </footer>
    </>
  );
}
