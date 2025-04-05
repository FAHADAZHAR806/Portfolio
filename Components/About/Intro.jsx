import { useState, useEffect } from "react";

export default function Intro() {
  const paragraphs = [
    "",
    " Software Engineer",
    " FrontEnd Web-Developer"
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    const currentText = paragraphs[currentParagraphIndex];

    // Typing effect interval
    const typingInterval = setInterval(() => {
      if (index < currentText.length-1) {
        setDisplayText((prev) => prev + currentText[index]);
        index++;
      } else {
        clearInterval(typingInterval); // Clear interval once the text is complete

        // Move to next paragraph after 2 seconds
        setTimeout(() => {
          setCurrentParagraphIndex((prev) => (prev + 1) % paragraphs.length);
          setDisplayText(""); // Clear the text for next paragraph
        }, 2000); // Wait for 2 seconds before changing the text
      }
    }, 90); // Typing speed

    return () => clearInterval(typingInterval); // Clean up the interval when the component unmounts
  }, [currentParagraphIndex]); // Effect runs every time currentParagraphIndex changes

 
  return (
    
    <>
 <div className="intro grid   gap-20  max-w-5xl m-auto p-6 mt-8   justify-items-center   sm:grid-cols-1 lg:grid-cols-2 lg:gap-0 lg:py-20 lg:px-2 " >


 <div className='w-90     border-[#EA5D20] border-2 animate-pulse rounded-full  '  >
          
          {/* <img src="/images/bg-white.svg" alt="" className='w-full h-full relative'  />  */}
          
          <img src="/images/Fahadpicafo.png" alt="Fahad.png"  className='w-full h-full relative object-cover   rounded-full drop-shadow-md'style={{ boxShadow: '0 0 60px  #EA5D20, 0 0 80px  #EA5D20, 0 0 90px   #EA5D20' }}
          />
          
          </div>
    <div className='grid grid-col-1 gap-6  text-[#FFFFFF] '>
    <p  className='text-[#F50D32]'>Hi, I am Fahad Azhar</p>
        <p className='text-4xl'>I'm <span className='text-[#f57d0dc0] ' >{displayText}</span></p>
        <p  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, aliquam, sunt fugiat
        esse sed incidunt quasi fuga veniam obcaecati ut quos eius veritatis maiores numquam  facilis ea maxime molestiae et! Officia commodi molestiae saepe enim necessitatibus magni pariatur nobis id excepturi est labore, quam voluptatum dicta veritatis cum</p>
        <button className='rounded-2xl bg-[#F50D32] w-40 h-10'>Contact me</button>
        
    </div>
        

        
        
      
   </div>
    </>
  );
}
