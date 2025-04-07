import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Service from './Service'
import Card from './Card'
import Selected from './selected'
import Testimonial from './Testimonial'
import Discover from './Discover'
export default function Intro() {

  const paragraphs = ["Software Engineer", "Front End Web Developer"];
  const [displayText, setDisplayText] = useState("");
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = paragraphs[currentParagraphIndex];

    let typingSpeed = isDeleting ? 60 : 100;

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));

        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setCurrentParagraphIndex((prev) => (prev + 1) % paragraphs.length);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [displayText, isDeleting, currentParagraphIndex, paragraphs]);

  
  return (
    <>
   <div data-aos="fade-up" className=" intro grid   gap-20  max-w-5xl m-auto p-4   justify-items-center   sm:grid-cols-1  lg:grid-cols-2 lg:gap-0 lg:py-20 lg:px-0 " >
   <div className=' grid grid-col-1 gap-6 text-[#FFFFFF] '>
    <p  className='text-[#F50D32] text-3xl'>Hi, Fahad Azhar</p>
        <p className='text-2xl'>I'm <span className='text-[#f57d0dc0] pr-2 ' >{displayText}</span></p>
        <p className="pr-4" >Always eager to learn new technologies and continuously enhance my skills. Passionate about staying at the forefront of technology trends, I strive to drive success in software development. With a growth mindset, I embrace new challenges and am committed to delivering innovative solutions.</p>
        <button className='rounded-2xl bg-[#F50D32] w-40 h-10 ' > <Link to="/contact">
  Contact Me
</Link></button>
        
    </div>

       
        
        
        <div className='w-90     border-[#EA5D20] border-2 animate-pulse rounded-full  '  >
          
          {/* <img src="/images/bg-white.svg" alt="" className='w-full h-full relative'  />  */}
          
          <img src="/images/Fahadpicafo.png" alt="Fahad.png"  className='w-full h-full relative object-cover   rounded-full drop-shadow-md'style={{ boxShadow: '0 0 60px  #EA5D20, 0 0 80px  #EA5D20, 0 0 90px   #EA5D20' }}
          />
          
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
